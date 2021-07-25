<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
  <slot></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 7px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background-color: rgb(156, 38, 38);
    color: white;
  }
  .primary.inverse {
    color: rgb(156, 38, 38);
    background-color: white;
    border: 2px solid rgb(156, 38, 38);
  }
  .secondary {
    background-color: rgb(20, 82, 28);
    color: white;
  }
  .secondary.inverse {
    color: rgb(20, 82, 28);
    background-color: white;
    border: 2px solid rgb(20, 82, 28);
  }
  .flat {
    box-shadow: none;
  }
  
</style>