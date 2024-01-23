import React from "react";
import "../AsideMenu/asidemenu.css";
import LogOut from "../LogOut/LogOut";
import { Link } from "react-router-dom";

function AsideMenu({ user, setUser }) {
  return (
    <div>
      <aside>
        <div className="profile">
          <div>
            <img
              className="profile-img"
              src="/xpenz.png"
            ></img>
          </div>
          <div>
            <h3>Hi {user.firstname}</h3>
          </div>
        </div>
        <div className="menu-div">
          <Link style={{textDecoration:'none'}} to='/dashboard'>
            <div className="dashboard-div">📈DASHBOARD</div>
          </Link>
          <Link style={{textDecoration:'none'}} to="/addincome">
            <div className="income-div">💰 INCOME</div>
          </Link>
          <Link style={{textDecoration:'none'}} to="/addexpense">
            <div className="expense-div">💸 EXPENSE</div>
          </Link>
        </div>
        <div className="logout-div">
          <LogOut setUser={setUser} />
        </div>
      </aside>
    </div>
  );
}

export default AsideMenu;
