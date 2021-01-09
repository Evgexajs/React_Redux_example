import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { userFetchData } from '../actions/userAction';
import { Route } from 'react-router-dom';
import UserAlbums from './UserDetails/UserAlbums.jsx';
import UserPosts from './UserDetails/UserPosts.jsx';
import UserTodos from './UserDetails/UserTodos.jsx';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function User ({fetchData, user, error, match}) {
    const userId = parseInt(match.params.id, 10);
    useEffect(() => {
      fetchData(userId)
    });
    
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
            <div>
                <Route path='/user/:id/albums'  component={UserAlbums}/>
                <Route path='/user/:id/posts'  component={UserPosts}/>
                <Route path='/user/:id/todos'  component={UserTodos}/>
            </div>
            <div className="user__navigation">
                <div><NavLink to={'/user/' + userId + "/albums"}>Albums</NavLink></div>
                <div><NavLink to={'/user/' + userId + "/posts"}>Posts</NavLink></div>
                <div><NavLink to={'/user/' + userId + "/todos"}>Todos</NavLink></div>
            </div>
        </div>
        <div className="footer">
            <div><NavLink to={'/users'}>Back</NavLink></div>
        </div>
        </div>
    );
}

function mapStateToProps (state) {
  return {
    user: state.user,
    error: state.error,
  };
}

const mapDispatchToProps = {
  fetchData: userFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(User);