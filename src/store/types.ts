import { ActionType } from 'typesafe-actions';
import * as headerActions from './slices/headerSlice';
import * as userActions from './slices/userSlice';
import * as tabActions from './slices/tabSlice';
import * as parentActions from './slices/parentSlice';

type RootAction = ActionType<
  | typeof headerActions
  | typeof userActions
  | typeof tabActions
  | typeof parentActions
>;

export default RootAction;
