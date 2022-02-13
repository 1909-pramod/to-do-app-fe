import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Action, User } from '../../data/Models/ReduxStore';
import { userState } from '../../data/StaticData/initialStoreState';

const initialState: User = userState

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginActions: (state, action: PayloadAction<{ user: User }>) => {
      switch (action.type) {
        case Action.USER_LOGIN:
          state = action.payload.user;
          break;
        case Action.USER_LOGOUT:
          state = userState;
          break;
      }
    }
  },
});
export const {
  loginActions
} = counterSlice.actions;

export default counterSlice.reducer;
