import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";
import Dashboard from "../../components/dashboard/Dashboard";
import CreateProfile from "../../components/profile-forms/CreateProfile";
import Alert from "../../components/layout/Alert";
import PrivateRoute from "../../components/routing/PrivateRoute";
import EditProfile from "../profile-forms/EditProfile";
import AddEducation from "../profile-forms/AddEducation";
import AddExperience from "../profile-forms/AddExperience";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
      </Switch>
    </section>
  );
};

export default Routes;
