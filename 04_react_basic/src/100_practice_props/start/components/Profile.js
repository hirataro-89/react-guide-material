import "./Profile.css";

const Profile = ({name='John Doe', age='??', country='Japan'}) => {
  return (
    <div className="profile">
      <h3>name: {name}</h3>
      <h3>age: {age}</h3>
      <h3>country: {country}</h3>
    </div>
  );
};


export default Profile;
