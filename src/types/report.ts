export type Report = {
    id: number;
    pid: number;
    type: number;
    name: string;
    childrens?: Report[];
}
