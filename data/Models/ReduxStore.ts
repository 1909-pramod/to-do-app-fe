export interface User {
  id: string,
  userName: string,
  firstName: string,
  lastName: string,
  email: string,
  dateOfBirth: string,
  token: string,
  initials: string
}

export enum Action {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}

export interface Store {
  user: User
}