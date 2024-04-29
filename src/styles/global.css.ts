import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle(
  `html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video`,
  {
    margin: 0,
    border: 0,
    padding: 0,
  }
);

globalStyle("html", {
  fontSize: "62.5%",
});

globalStyle("body", {
  fontFamily: "inherit",
});

globalStyle("button, input, textarea", {
  fontFamily: "inherit",
});

globalStyle("button", {
  borderRadius: 0,
  border: "none",
  boxShadow: "none",
  background: "inherit",
  color: "inherit",
  padding: 0,
  overflow: "visible",
  cursor: "pointer",
});

globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

globalStyle("dialog", {
  border: "none",
  padding: 0,
});
