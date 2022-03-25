export const setLoginToken = (token) =>
  localStorage.setItem("LOGINTOKEN", token);

export const getLoginToken = () => {
  return localStorage.getItem("LOGINTOKEN") || "";
};

export const removeLoginToken = () => {
  console.log("remove token");
  localStorage.removeItem("LOGINTOKEN");
  console.log("token is " + localStorage.getItem("LOGINTOKEN"));
};
