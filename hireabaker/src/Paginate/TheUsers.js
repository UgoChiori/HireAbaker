import React from "react";
import User from "../Paginate/User";
import { USER_PER_PAGE } from "../Paginate/MyUser";


const TheUsers = ({ users, page }) => {
    const start = (page - 1) * USER_PER_PAGE;
    const end = start + USER_PER_PAGE;
    const usersToDisplay = users.slice(start, end);
    return (
        <div className="users">
        {usersToDisplay.map((user) => (
            <User key={user.login.uuid} user={user} />
        ))}
        </div>
    );
}


export default TheUsers;