import { Condition } from '@/types/condition';

// define action types
export const ADD = 'condition/ADD' as const;
export const REMOVE = 'condition/REMOVE' as const;

// define action creators
export const add = (condition: Condition) => ({
    type: ADD,
    payload: condition
});
export const remove = (id: number) => ({
    type: REMOVE,
    payload: id
});

type Action = ReturnType<typeof add> | ReturnType<typeof remove>;

// define initial state
const initialState: Condition[] = [
    {
        id: 1,
        name: 'Condition 1',
        type: 'Combo',
        desc: 'Condition 1'
    },
    {
        id: 2,
        name: 'Condition 2',
        type: 'DateFromTo',
        desc: 'Condition 2'
    },
    {
        id: 3,
        name: 'Condition 3',
        type: 'Text',
        desc: 'Condition 3'
    },
    {
        id: 4,
        name: 'Condition 4',
        type: 'Radio',
        desc: 'Condition 4'
    },
    {
        id: 5,
        name: 'Condition 5',
        type: 'Checkbox',
        desc: 'Condition 5'
    },
    {
        id: 6,
        name: 'Condition 6',
        type: 'TreeListCombo',
        desc: 'Condition 6'
    },
    {
        id: 7,
        name: 'Condition 7',
        type: 'Date',
        desc: 'Condition 7'
    },
    {
        id: 8,
        name: 'Condition 8',
        type: 'CheckCombo',
        desc: 'Condition 8'
    }
];

// define reducer
export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case REMOVE:
            return state.filter((condition) => condition.id !== action.payload);
        default:
            return state;
    }
}
