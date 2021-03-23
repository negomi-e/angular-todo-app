export class ToDoItem {
    id: number;
    item: string ='';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}