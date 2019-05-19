import { AxiosWrapper } from "./axios";

import { User } from "src/types/user";

export default class AuthApi extends AxiosWrapper {
  static async login({ userLogin }: { userLogin?: string }) {
    return await this.get<{ userLogin?: string }, User>("/user", { userLogin });
  }

  static async signUp(user: User) {
    return await this.post("/user/signup", user);
  }
}
