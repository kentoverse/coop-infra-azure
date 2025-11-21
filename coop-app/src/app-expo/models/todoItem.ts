export enum TodoItemState {
    Todo = "todo",
    InProgress = "inprogress",
    Done = "done"
}

export interface TodoItem {
    id?: string
    listId: string
    name: string
    state: TodoItemState
    description?: string
    dueInDays?: number
    completedDate?:Date
    createdDate?: Date
    updatedDate?: Date
    progress?: number

}