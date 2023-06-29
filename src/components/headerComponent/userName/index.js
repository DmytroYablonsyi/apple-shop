import React from "react"

import "./style.css"

const UserName = ({nameUser}) => {
        return <div className="userName">{nameUser && `Hi, ${nameUser} `}</div>
}

export default UserName