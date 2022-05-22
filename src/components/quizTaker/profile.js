const Profile = () => {
    return (
        <div className="user-info">
            <h5>Display Name: {localStorage.getItem('name')}</h5>
            <h5>Email: {localStorage.getItem('email')}</h5>
            <img alt={localStorage.getItem('name')}>
                {localStorage.getItem('profilePicture')}
            </img>
        </div>
    );
};

export default Profile;
