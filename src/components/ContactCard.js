import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

function ContactCard(props) {

  const {id, Name} = props.contact;
  console.log(props.contact)
  return (
    <div>
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <div className="header">{Name}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
