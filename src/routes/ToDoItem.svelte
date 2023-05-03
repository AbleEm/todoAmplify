<script lang="ts">
  export let id: string, done: boolean, todo: string;
</script>

<li>
  <label for={id}>
    <input type="checkbox" name="todoItem" {id} bind:checked={done} />
    <span class:strike={done}>{todo}</span>
  </label>
</li>

<style>
  .strike {
    text-decoration: line-through;
  }
</style>
