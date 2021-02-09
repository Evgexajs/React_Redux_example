import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { userAlbumsFetchData } from '../../actions/UserDetails/userAlbumsAction';
import '../../style/style.css';

function UserAlbums ({userId}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userAlbumsFetchData(userId))
    });

    const userAlbums = useSelector (state => state.userAlbums)
    const error = useSelector (state => state.error)

    if (error.length) return <h1>{error}</h1>;

    return (
      <div>
      <div className="user__header"><h1>Albums</h1></div>
        <div className="user__list">
            {userAlbums.map((userAlbum) => {
                return (
                <li  key={userAlbum.id}>
                    <div>Title is: {userAlbum.title}</div>
                </li>
            )})}
        </div>
      </div>
    );
}

export default UserAlbums;