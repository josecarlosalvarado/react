import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react'

export default function Record(props) {

const [userData, setUserData] = useState({});

const {user} = useParams(); // devuleve un objeto con los parametros

const USER_URL = "https://reqres.in/api/users/";

useEffect(() => {
    fetch(`${USER_URL}${user}`)
    .then(response => response.json())
    .then(data => setUserData(data))
}, [user])

    return (
        <div>
                       {/* {props.match.params.user} */}
            <h2>Record of</h2>
            <ul className="list-group">
                <li className="list-group-item mb-2 bg-dark text-white w-50 container">{userData.data?.email}</li>
                <li className="list-group-item mb-2 bg-dark text-white w-50 container">{userData.data?.first_name}</li>
                <li className="list-group-item mb-2 bg-dark text-white w-50 container">{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} className="w-25 h-25 m-auto"></img>
            </ul>
        </div>
    )
}
