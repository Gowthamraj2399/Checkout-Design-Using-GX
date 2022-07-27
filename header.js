var image = GX.create("img", [
  { style: "height: 100px; width: 100px" },
  { class: "my-4" },
  { src: "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" },
]);
var headerHeading = GX.create(
  "h2",
  [{ class: "fw-bold fs-2 my-3" }],
  "Checkout form"
);

var headerPara = GX.create(
  "p",
  [{ class: "fs-5 fw-light text-center mb-4" }],
  `Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.`
);

var header = GX.create(
  "div",
  [
    {
      class:
        "container d-flex align-items-center justify-content-center flex-column",
    },
  ],
  null,
  [image, headerHeading, headerPara]
);

var headerDom = GX(header);

document.body.append(headerDom);
