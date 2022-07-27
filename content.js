var formSection = GX.create("form", [{ class: "col-8" }]);
var asideSection = GX.create("aside", [{ class: "col-4" }]);
var mainArea = GX.create("div", [{ class: "row" }], null, [
  formSection,
  asideSection,
]);
var main = GX.create("main", [{ class: "container" }], null, [mainArea]);

// =================== Aside =====================================

var asideHeading = GX.create(
  "h3",
  [{ class: "fw-bold fs-3 text-secondary" }],
  "Your cart"
);

var cartContainer = GX.create("div", [{ class: "bg-white" }]);

//=====================Product 1====================================

var products = [
  {
    name: "Product name",
    desc: "Brief description",
    price: 12,
    class: "d-flex justify-content-between border p-2",
  },
  {
    name: "Product name 2",
    desc: "Brief description 2",
    price: 13,
    class: "d-flex justify-content-between border p-2",
  },
  {
    name: "Product name 2",
    desc: "Brief description 2",
    price: 13,
    class: "d-flex justify-content-between border p-2",
  },
  {
    name: "Promo Code",
    desc: "EXAMPLECODE",
    price: -13,
    class: "d-flex justify-content-between border p-2 text-success bg-light",
  },
];

var productTotal = 0;

var productEle = [];

for (var i = 0; i < products.length; i++) {
  var productContainer = GX.create("div", [{ class: products[i].class }]);
  var productName = GX.create(
    "h4",
    [{ class: "fs-6 fw-bold" }],
    products[i].name
  );
  var productDesc = GX.create(
    "p",
    [{ class: "text-secondary" }],
    products[i].desc
  );
  var ProductDesContainer = GX.create(
    "div",
    [{ class: "d-flex flex-column" }],
    null,
    [productName, productDesc]
  );
  var productPrice = GX.create(
    "h4",
    [{ class: "fs-6 text-secondary" }],
    "$" + products[i].price
  );
  productTotal += products[i].price;
  productContainer.addChildren([ProductDesContainer, productPrice]);
  productEle.push(productContainer);
}

var cartTotalContainer = GX.create("div", [
  { class: "d-flex justify-content-between border p-2" },
]);
var cartTotalText = GX.create("p", [{ class: "fs-6" }], "Total (USD)");
var cartTotal = GX.create("p", [{ class: "fw-bold fs-6" }], `$${productTotal}`);

cartTotalContainer.addChildren([cartTotalText, cartTotal]);
productEle.push(cartTotalContainer);
cartContainer.addChildren(productEle);
asideSection.addChildren([asideHeading, cartContainer]);

var formHeading = GX.create(
  "h3",
  [{ class: "fw-bold fs-3" }],
  "Billing address"
);

///==============First Name ====================

var firstRow = GX.create("div", [{ class: "row" }]);
var firstNameLabel = GX.create(
  "label",
  [{ class: "form-label" }],
  "First name"
);
var firstNameInput = GX.create("input", [
  { class: "form-control mb-3" },
  { type: "text" },
]);
var firstNameCol = GX.create("div", [{ class: "col-6" }], null, [
  firstNameLabel,
  firstNameInput,
]);

//====================Last Name =====================
var lastNameCol = firstNameCol.clone();
var lastNameLabel = firstNameLabel.clone();
lastNameLabel.setText("Last name");
var lastNameInput = GX.create("input", [
  { class: "form-control mb-3" },
  { type: "text" },
]);
lastNameInput.set("placeholder", "lastname");
console.log("firstname", firstNameInput, "lastname", lastNameInput);
lastNameCol.addChildren([lastNameLabel, lastNameInput]);

//=================== User Name =======================
var usernameColumn = GX.create("div", [{ class: "col-12" }]);
var usernameLabel = lastNameLabel.clone();
usernameLabel.setText("Username");
var usernameInput = lastNameInput.clone();
// usernameInput.set("placeholder", "username");
usernameColumn.addChildren([usernameLabel, usernameInput]);

//=================== Email =============================
var emailCol = usernameColumn.clone();
var emailLabel = usernameLabel.clone();
emailLabel.setText("Email (Optional)");
var emailInput = usernameInput.clone();
emailCol.addChildren([emailLabel, emailInput]);

//================== Address ============================
var addressCol = emailCol.clone();
var addressLabel = emailLabel.clone();
addressLabel.setText("Address");
var addressInput = emailInput.clone();
addressCol.addChildren([addressLabel, addressInput]);

//================== Address2 ============================
var address2Col = emailCol.clone();
var address2Label = emailLabel.clone();
address2Label.setText("Address 2 (Optional)");
var address2Input = emailInput.clone();
address2Col.addChildren([address2Label, address2Input]);

//====================Country ============================

var addRow = firstRow.clone();

var countryCol = GX.create("div", [{ class: "col-4" }]);
var countryLabel = emailLabel.clone();
countryLabel.setText("Country");
var countryOption = GX.create("option", [{ class: "form-control" }], "India");
var countrySelect = GX.create("select", [{ class: "form-control" }], null, [
  countryOption,
]);
countryCol.addChildren([countryLabel, countrySelect]);

//===================State ===============================
var stateCol = countryCol.clone();
var stateLabel = countryLabel.clone();
stateLabel.setText("State");

var stateOption = GX.create("option", [{ class: "form-control" }], "TN");
var stateSelect = GX.create("select", [{ class: "form-control" }], null, [
  stateOption,
]);
stateSelect.addChildren(stateOption);
stateCol.addChildren([stateLabel, stateSelect]);

//===================Zip===================================
var zipCol = countryCol.clone();
var zipLabel = countryLabel.clone();
zipLabel.setText("Zip");
var zipInput = firstNameInput.clone();
zipCol.addChildren([zipLabel, zipInput]);

firstRow.addChildren([firstNameCol, lastNameCol]);
addRow.addChildren([countryCol, stateCol, zipCol]);

//===============CheckBox section ==========================

var checkSec = GX.create("div", [
  { class: "my-4 py-2 border-top border-bottom row" },
]);

//================CheckBox 1 =================================

var checks = [
  "Shipping address is the same as my billing address",
  "Save this information for next time",
];

var checkBoxContainer = GX.create("div", [{ class: "col-12" }]);
var checkBox = GX.create("input", [
  { class: "form-check-input" },
  { type: "checkbox" },
]);
checkBoxContainer.addChildren(checkBox);

checkSec.addChildren(checkBoxContainer);

formSection.addChildren([
  formHeading,
  firstRow,
  usernameColumn,
  emailCol,
  addressCol,
  address2Col,
  addRow,
  checkSec,
]);

var contentDom = GX(main);

document.body.append(contentDom);
