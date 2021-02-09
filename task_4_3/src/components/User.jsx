import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userFetchData } from '../actions/userAction';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import UserAlbums from './UserDetails/UserAlbums.jsx';
import UserPosts from './UserDetails/UserPosts.jsx';
import UserTodos from './UserDetails/UserTodos.jsx';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function User ({match}) {
    const userId = parseInt(match.params.id, 10);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userFetchData(userId))
    });

    const user = useSelector (state => state.user)
    const error = useSelector (state => state.error)
    
    if (error.length) return <h1>{error}</h1>;
    let userPhone = user?.phone;
    if (userPhone)
    {
        userPhone = userPhone.substring(0, userPhone.indexOf(" ") - 1);
        if (userPhone.length === 0) {userPhone = user?.phone}
    }
    else
        userPhone = user.phone
    return (
        <div className="user__main">
        <div className="user">
            <div className="user__container">
            <div><h1>{user.name}</h1></div>
            <div className="user__el">
                <FontAwesomeIcon icon='envelope' size="3x" />
                <div className="user__right">
                    <div>{user.email}</div>
                    <div className="user__parameter">Email</div>
                </div>
            </div>
            <div className="user__el">
                <FontAwesomeIcon icon='phone' size="3x" />
                <div className="user__right">
                    <div>{userPhone}</div>
                    <div className="user__parameter">Phone</div>
                </div>
            </div>
            <div className="user__el">
                <FontAwesomeIcon icon='address-card' size="3x" />
                <div className="user__right">
                    <div>{user.address?.street + " " + user.address?.suite + ", "}<br/>
                    {user.address?.city + ", " + user.address?.zipcode}</div>
                    <div className="user__parameter">Address</div>
                </div>
            </div>
            <div className="user__el">
                <FontAwesomeIcon icon='sitemap' size="3x" />
                <div className="user__right">
                    <div>{user.website}</div>
                    <div className="user__parameter">Website</div>
                </div>
            </div>
            </div>
            <div className="user__right">
                <Tabs>
                    <TabList className="user__navigation">
                    <Tab>Albums</Tab>
                    <Tab>Posts</Tab>
                    <Tab>Todos</Tab>
                    </TabList>
                    <TabPanel><UserAlbums userId={userId}/></TabPanel>
                    <TabPanel><UserPosts userId={userId}/></TabPanel>
                    <TabPanel><UserTodos userId={userId}/></TabPanel>
                </Tabs>
            </div>
        </div>
        <div className="footer">
            <div><NavLink to={'/users'}>Back</NavLink></div>
        </div>
        </div>
    );
}

export default User;