import React from "react";
import "../AddIncome/addincome.css";
import AsideMenu from "../AsideMenu/AsideMenu";

function AddIncome({ user, setUser }) {
  return (
    <div className="addincome-div">
      <AsideMenu user={user} setUser={setUser} />
      <section>
        <div className="add-income-div">
          <div className="add-income-inner-div">
            <h2>TOTAL INCOME:</h2>
          </div>

          <div className="add-income">
            <div className="addincomeform">
              
                <form>
                <div className="formdiv">
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Expense Title"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="amount"
                      placeholder="Expense Amount"
                    />
                  </div>
                  <div>
                    <input type="date" name="date" />
                  </div>
                  <div className="select-div">
                    <select name="category" id="category">
                      <option value="salary">Salary</option>
                      <option value="salary">BitCoin</option>
                      <option value="salary">Investment Return</option>
                      <option value="salary">Bank Transfer</option>
                      <option value="salary">Gift</option>
                      <option value="salary">Other</option>
                    </select>
                  </div>

                  <div>
                    <input className="desc-text"
                      type="textarea"
                      name="desc"
                      placeholder="Description"
                    />
                  </div>
                  <div>
                    <input type="submit" value="Add Income" />
                  </div>
                  </div>
                </form>
              
            </div>
            <div className="incomelist">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, aperiam. Iste optio sint, quidem saepe, ex esse
              voluptates assumenda mollitia impedit pariatur atque, enim
              perspiciatis recusandae vel error ipsum! Corrupti.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddIncome;
