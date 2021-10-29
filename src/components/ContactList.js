import React, { useRef } from "react";
import ContactCard from "./ContactCard";
import './ContactDesign.css'

function ContactList(props) {
  console.log(props);
  const inputEl = useRef("");
  const deleteContact = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContact}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="homepage">
      <h2
        style={{
          marginTop: "50px",
        }}
      >
        Player List
      </h2>
      <div className="ui search">
        <div
          className="ui icon input"
          style={{
            marginTop: "15px",
          }}
        >
          <input
            ref={inputEl}
            type="text"
            value={props.value}
            placeholder="search Player"
            className="prompt"
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No contacts available"}
      </div>
    </div>
  );
}

export default ContactList;
