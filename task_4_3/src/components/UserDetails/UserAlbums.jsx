import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { userAlbumsFetchData } from '../../actions/UserDetails/userAlbumsAction';
import '../../style/style.css';

function UserAlbums ({fetchData, userAlbums, error, match}) {
    const userId = parseInt(match.params.id, 10);
    useEffect(() => {
      fetchData(userId)
    });

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

function mapStateToProps (state) {
  return {
    userAlbums: state.userAlbums,
    error: state.error,
  };
}

const mapDispatchToProps = {
  fetchData: userAlbumsFetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(UserAlbums);