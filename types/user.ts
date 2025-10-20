export interface User {
  // id: string;
  email: string;
  username: string;
  avatar: string;
}
export interface RegisterRequest {
  email: string;
  password: string;
  //username: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface EditRequest {
  // email: string;
  username: string;
}
