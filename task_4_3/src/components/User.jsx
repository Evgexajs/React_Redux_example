import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { userFetchData } from '../actions/userAction';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function User ({fetchData, user, error, match}) {
    const userId = parseInt(match.params.id, 10);
    useEffect(() => {
      fetchData(userId)
    });
    
    if (error.length) return <h1>{error}</h1>;
    return (
        <div className="user">
            <div>
            <div><h1>{user.name}</h1></div>
            <div className="userEl">
                <FontAwesomeIcon icon='envelope' size="3x" />
                <div className="userRight">
                    <div>{user.email}</div>
                    <div className="userParameter">Email</div>
                </div>
            </div>
            <div className="userEl">
                <FontAwesomeIcon icon='phone' size="3x" />
                <div className="userRight">
                    <div>{user.phone}</div>
                    <div className="userParameter">Phone</div>
                </div>
            </div>
            <div className="userEl">
                <FontAwesomeIcon icon='address-card' size="3x" />
                <div className="userRight">
                    <div>{user.address.street + " " + user.address.suite + ", "}<br/>
                    {user.address.city + ", " + user.address.zipcode}</div>
                    <div className="userParameter">Address</div>
                </div>
            </div>
            <div className="userEl">
                <FontAwesomeIcon icon='sitemap' size="3x" />
                <div className="userRight">
                    <div>{user.website}</div>
                    <div className="userParameter">Website</div>
                </div>
            </div>
            <div className="back"><NavLink to={'/users'}>Back</NavLink></div>
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