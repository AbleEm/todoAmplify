<script lang="ts">
  import { ToDo } from "./ToDo";
  import ToDoItem from "./ToDoItem.svelte";

  let todos: ToDo[] = [];

  let newTodo: string;

  const addToDo = () => {
    let todo = new ToDo(newTodo);
    newTodo = "";
    todos = [todo, ...todos];
  };

  const removeCompletedToDos = () => {
    todos = todos.filter((todo) => todo.done === false);
  };

  $: console.log("todos", todos);
</script>

<h1>TO DO APP</h1>

<form on:submit|preventDefault={addToDo}>
  <label for="addToDo">To do</label>
  <input
    type="text"
    id="newTodo"
    name="newTodo"
    bind:value={newTodo}
    placeholder="new todo"
  />
  <button type="submit" disabled={!newTodo}>Add</button>
  <button on:click|preventDefault={removeCompletedToDos}
    >Remove completed</button
  >
</form>

{#if todos.length > 0}
  <ul>
    {#each todos as todo (todo.id)}
      <ToDoItem id={todo.id} todo={todo.todo} bind:done={todo.done} />
    {/each}
  </ul>
{/if}
