const express = require("express");
const fs = require("fs");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("hs-client/build"));
}
const USER_INFO = Array(100)
  .fill("")
  .map((e, idx) => {
    return { id: idx, name: "SDEsd21" + idx, age: idx, createTime: new Date() };
  });
const COLUMNS = [
  "carbohydrate_g",
  "protein_g",
  "fa_sat_g",
  "fa_mono_g",
  "fa_poly_g",
  "kcal",
  "description"
];
app.post("/api/v1/login", (req, res) => {
  const param = req.query.q;
  console.log(`Login params: ${param}`);
  res.json({
    user_id: 0,
    name: "Admin",
    jwt: "aWoIvDds89sdf_iWlFG"
  });
});

app.post("/api/v1/users/current", (req, res) => {
  const param = req.query.q;
  console.log(`Login params: ${param}`);
  res.json({
    user_id: 0,
    name: "Admin"
  });
});

app.post("/api/v1/userInfoQuery", (req, res) => {
  const param = req.query;
  console.log(`Login params: ${JSON.stringify(param)}`);
  let { pageSize, currentPage } = param;
  let _pageSize = Number(pageSize), _currentPage = Number(currentPage);
  let start = _pageSize * (_currentPage - 1),
    end = start + _pageSize;
    console.log(`Start: ${start}, End: ${end}`);
  res.json(
    pageData(
      USER_INFO.slice(start, end >= USER_INFO.length ? USER_INFO.length : end),
      10,
      1,
      USER_INFO.length
    )
  );
});

function pageData(data, pageSize, currentPage, total) {
  return {
    data,
    pageSize,
    currentPage,
    total
  };
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
