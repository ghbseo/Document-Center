import { Report } from '@/interfaces/report.interface';

// define action types
export const ADD = 'report/ADD' as const;
export const REMOVE = 'report/REMOVE' as const;

// define action creators
export const add = (report: Report) => ({
    type: ADD,
    payload: report
});
export const remove = (id: number) => ({
    type: REMOVE,
    payload: id
});

type Action = ReturnType<typeof add> | ReturnType<typeof remove>;

// define initial state
const initialState: Report[] = [
    {
        id: 1,
        pid: 0,
        type: 0,
        name: '종합 보고서'
    },
    {
        id: 2,
        pid: 0,
        type: 0,
        name: '프로그램'
    },
    {
        id: 3,
        pid: 2,
        type: 0,
        name: '프로그램 연관'
    },
    {
        id: 4,
        pid: 1,
        type: 1,
        name: '종합 보고서 1'
    },
    {
        id: 5,
        pid: 1,
        type: 1,
        name: '종합 보고서 2'
    },
    {
        id: 6,
        pid: 2,
        type: 0,
        name: '프로그램 명세'
    },
    {
        id: 7,
        pid: 3,
        type: 1,
        name: '프로그램 연관 1'
    },
    {
        id: 8,
        pid: 3,
        type: 2,
        name: '프로그램 연관 2'
    },
    {
        id: 9,
        pid: 6,
        type: 2,
        name: '프로그램 명세 1'
    }
];

// define reducer
export default function reducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        // todo: target id를 pid로 가지고 있는 report들도 삭제
        case REMOVE:
            return state.filter((report) => report.id !== action.payload);
        default:
            return state;
    }
}
