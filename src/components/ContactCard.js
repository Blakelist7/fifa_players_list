import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import "./contactCard.css";

function ContactCard(props) {

  const {id, Name} = props.contact;
  console.log(props.contact)
  return (
    <div>
      <main className="leaderboard__profiles">
        <article className="leaderboard__profile">
        <img className="leaderboard__picture" src={user} alt="user" />
        <span className="content">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <span className="leaderboard__name">{Name}</span>
          </Link>
        </span>
        </article>
      </main>
    </div>
  );
}

export default ContactCard;
