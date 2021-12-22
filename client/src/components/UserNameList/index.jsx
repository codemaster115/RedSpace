import React from "react";

import './userNameList.css';

export default function UserNameList({data, handleClick}) {
  return (
    <div>
      {data.map((user, index) => (
        <div
          button
          key={index}
          onClick={() => handleClick(index)}
          className="userNameItem"
        >
          {`${user.name}`}
        </div>
        )
      )}
    </div>
  )
}
