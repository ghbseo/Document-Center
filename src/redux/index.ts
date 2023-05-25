import { combineReducers } from 'redux';
import user from './user';
import menu from './menu';
import report from './report';
import condition from './condition';

const rootReducer = combineReducers({ user, menu, report, condition });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
