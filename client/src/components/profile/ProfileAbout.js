import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = props => {
  return (
    <div class="profile-about bg-light p-2">
      <h2 class="text-primary">John's Bio</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed doloremque
        nesciunt, repellendus nostrum deleniti recusandae nobis neque modi
        perspiciatis similique?
      </p>
      <div class="line" />
      <h2 class="text-primary">Skill Set</h2>
      <div class="skills">
        <div class="p-1">
          <i class="fa fa-check" /> HTML
        </div>
        <div class="p-1">
          <i class="fa fa-check" /> CSS
        </div>
        <div class="p-1">
          <i class="fa fa-check" /> JavaScript
        </div>
        <div class="p-1">
          <i class="fa fa-check" /> Python
        </div>
        <div class="p-1">
          <i class="fa fa-check" /> C#
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {};

export default ProfileAbout;
