import React, { PropTypes } from 'react';
import ContactName from '../Contact/ContactName/index';

const SelectedContact = props => {

  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <ContactName
          name={props.name}
          searchValue={props.searchValue}
          id={props._id}
        />
        {props.occupation}
      </div>
      <div className="button unselect"
        title="Unselect contact"
        onClick={() => props.onUnselect(props._id)}>
        Unselect
      </div>
    </li>
  );
};

SelectedContact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
  occupation: PropTypes.string.isRequired,
  onUnselect: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired
};

export default SelectedContact;
