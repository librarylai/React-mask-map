import React, { Component, Fragment } from "react";
import moment from "moment";
import ShopInfoComponent from "../Components/ShopInfoComponent";
import "../Scss/NavMenuComponent.scss";
class NavMenuComponent extends Component {
  componentDidMount = () => {
    moment.locale();
  };
  renderCardInfo = () => {
    const { data, handleCardClick } = this.props;
    return data.map(item => {
      return (
        <div
          key={item.properties.id}
          className="navMenuComponent-shopListContainer-cardContent"
        >
          <ShopInfoComponent
            shopItem={item}
            handleCardClick={handleCardClick}
          />
        </div>
      );
    });
  };
  render() {
    const { handleSearchBarSubmit } = this.props;
    return (
      <Fragment>
        <div className="navMenuComponent-titleContainer">
          <div className="navMenuComponent-titleContainer-content">
            <p className="navMenuComponent-titleContainer-title">口罩查詢</p>
            <div className="navMenuComponent-titleContainer-dateContent">
              <p>{moment().format("dddd")}</p>
              <p>{moment().format("YYYY/MM/DD")}</p>
            </div>
          </div>
          <div className="navMenuComponent-titleContainer-searchBar">
            <input
              placeholder="搜尋區域,地址,藥局"
              type="text"
              onKeyPress={handleSearchBarSubmit}
            />
          </div>
        </div>
        <div className="navMenuComponent-shopListContainer">
          {this.renderCardInfo()}
        </div>
      </Fragment>
    );
  }
}
export default NavMenuComponent;
