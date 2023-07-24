class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openTab: 0 };

    this.switchTab = this.switchTab.bind(this);
  }

  switchTab(index) {
    this.setState({ openTab: index });
  }

  render() {
    const { openTab } = this.state;

    return /*#__PURE__*/(
      React.createElement("div", { className: "settings-container" }, /*#__PURE__*/
      React.createElement("div", { className: "left-column" }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", { onClick: this.switchTab.bind(this, 0) }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-user" }), "General"), /*#__PURE__*/

      React.createElement("li", { onClick: this.switchTab.bind(this, 1) }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-shield-alt" }), "Password"), /*#__PURE__*/

      React.createElement("li", { onClick: this.switchTab.bind(this, 2) }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-ban" }), "Blocking"), /*#__PURE__*/

      React.createElement("li", { onClick: this.switchTab.bind(this, 3) }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-minus-circle" }), "Delete profile"))), /*#__PURE__*/



      React.createElement("div", { className: "settings-tab" },
      openTab === 0 && /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("h1", null, "General account Settings"), /*#__PURE__*/
      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { name: "first_name", type: "text", value: "Chloe" }), /*#__PURE__*/
      React.createElement("label", null, "username")), /*#__PURE__*/

      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { name: "first_name", type: "text", value: "chloe@test.fr" }), /*#__PURE__*/
      React.createElement("label", null, "mail")), /*#__PURE__*/

      React.createElement("div", { className: "btn" }, "Save Change")),




      openTab === 1 && /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("h1", null, "Change password"), /*#__PURE__*/
      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { type: "password" }), /*#__PURE__*/
      React.createElement("label", null, "old password")), /*#__PURE__*/

      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { type: "password" }), /*#__PURE__*/
      React.createElement("label", null, "new password")), /*#__PURE__*/

      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { type: "password" }), /*#__PURE__*/
      React.createElement("label", null, "new password confirmation")), /*#__PURE__*/

      React.createElement("div", { className: "btn" }, "Save Change")),




      openTab === 2 && /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("h1", null, "Manage blocked profiles"), /*#__PURE__*/
      React.createElement("div", { className: "profiles" }, /*#__PURE__*/
      React.createElement("img", { className: "select", src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" }), /*#__PURE__*/
      React.createElement("img", { src: "https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" })), /*#__PURE__*/

      React.createElement("div", { className: "btn" }, "Unblock")),




      openTab === 3 && /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("h1", null, "Delete your profile"), /*#__PURE__*/
      React.createElement("h2", null, "Are you sure you want to delete your profile ?", /*#__PURE__*/React.createElement("br", null), " All your matchs will be lost..."), /*#__PURE__*/
      React.createElement("div", { className: "input-group" }, /*#__PURE__*/
      React.createElement("input", { type: "password" }), /*#__PURE__*/
      React.createElement("label", null, "password")), /*#__PURE__*/

      React.createElement("div", { className: "btn" }, "Confirm")))));







  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));