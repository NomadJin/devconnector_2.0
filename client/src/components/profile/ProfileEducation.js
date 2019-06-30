import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

const ProfileEducation = ({ education: {
  school, degree, fieldofstudy, current, to, from, description
}}) => {
  return (
    <div className="profile-edu bg-white p-2">
      <h2 className="text-primary">Education</h2>
      <div>
        <h3>{school}</h3>
        <p><Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{" "}
          {to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>
          )}</p>
        <p>
          <strong>Degree: </strong>{degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>{fieldofstudy}
        </p>
        <p>
          <strong>Description: </strong>{description}
        </p>
      </div>
    </div>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
