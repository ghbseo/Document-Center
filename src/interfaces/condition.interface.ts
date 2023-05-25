export interface Condition {
    id: number;
    name: string;
    type: 'Combo' | 'DateFromTo' | 'Text' | 'Radio' | 'Checkbox' | 'TreeListCombo' | 'Date' | 'CheckCombo';
    desc: string;
}
