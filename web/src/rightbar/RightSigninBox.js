// Copyright 2020 The casbin Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import { withRouter, Link } from "react-router-dom";
import i18next from "i18next";

class RightSigninBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
    };
  }

  render() {
    return (
      <div className="box">
        <div className="cell">
          <strong>Casbin = way to authorization</strong>
          <div className="sep5" />
          <span className="fade">A place for Casbin developers and users</span>
        </div>
        <div className="inner">
          <div className="sep5" />
          <div align="center">
            <Link to="/signup" className="super normal button">
              {i18next.t("bar:Sign Up Now")}
            </Link>
            <div className="sep5" />
            <div className="sep10" />
            {i18next.t("bar:For Existing Member")} &nbsp;
            <Link to="/signin">{i18next.t("bar:Sign In")}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RightSigninBox);
