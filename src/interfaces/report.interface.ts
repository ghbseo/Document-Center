export interface Report {
    id: number;
    pid: number;
    type: number;
    name: string;
    childrens?: Report[];
}
