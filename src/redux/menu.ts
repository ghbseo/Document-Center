import { Menu } from '@/types/menu';

// define action types
export const SELECT = 'menu/SELECT' as const;
export const TOGGLE = 'menu/TOGGLE' as const;

// define action creators
export const select = (id: string) => ({
    type: SELECT,
    payload: id
});
export const toggle = () => ({
    type: TOGGLE
});

type Action = ReturnType<typeof select> | ReturnType<typeof toggle>;

// define initial state
const initialState: Menu = {
    id: '1',
    isOpen: false
};

// define reducer
export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case SELECT:
            return {
                ...state,
                id: action.payload
            };
        case TOGGLE:
            return {
                ...state,
                isOpen: !state.isOpen
            };
        default:
            return state;
    }
}
