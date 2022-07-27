var copyRight = GX.create(
  "p",
  [{ class: "text-secondary fs-5" }],
  "© 2017-2018 Company Name"
);

var footerLinks = GX.create("div", [{ class: "d-flex gap-2" }]);

var links = ["Privacy", "Terms", "Support"];

for (var i = 0; i < links.length; i++) {
  footerLinks.addChildren(
    GX.create(
      "p",
      [{ class: "text-primary my-2" }, { style: "cursor: pointer" }],
      links[i]
    )
  );
}

var footer = GX.create(
  "div",
  [
    {
      class:
        "container d-flex align-items-center justify-content-center flex-column my-5",
    },
  ],
  null,
  [copyRight, footerLinks]
);

var footerDom = GX(footer);

document.body.append(footerDom);
