const Member = ({email, picture, name, location}) => 
    <div>
       <img src={picture.thumbnail} alt=""/> 
       <h1>{name.first} {name.lat}</h1>
       <p><a href={"mailto:"+email}>{email}</a></p>
       <p>{location.city}, {location.state}</p>
    </div>

export default Member