import { AxiosResponse } from "axios";
import { request } from "../base.service";

export async function login(body) {
  return request().post("/auth/validation", body);
}


// backend/src/auth/auth.controller.ts
export async function getSession() {
  return request().get("/auth/session");
}
