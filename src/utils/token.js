export const setLoginToken = (token) =>
  localStorage.setItem("LOGINTOKEN", token);

export const getLoginToken = () => {
  return localStorage.getItem("LOGINTOKEN") || "";
};

export const removeLoginToken = () => {
  localStorage.removeItem("LOGINTOKEN");
};
