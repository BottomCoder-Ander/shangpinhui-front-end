import { nanoid } from "nanoid";

// 按道理UUID应该是后端给的才对，不应该前端生成
export const getUUID = () => {
  let uuid_token = localStorage.getItem("UUID_TOKEN");
  if (!uuid_token) {
    uuid_token = nanoid();
    localStorage.setItem("UUID_TOKEN", uuid_token);
  }
  return uuid_token;
};
