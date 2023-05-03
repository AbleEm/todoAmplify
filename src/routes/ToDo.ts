export class ToDo {
  id: string;
  done: boolean;
  todo: string;

  constructor(todo: string) {
    this.id = crypto.randomUUID();
    this.done = false;
    this.todo = todo;

    return this;
  }
}
