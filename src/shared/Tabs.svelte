<script>
  import {createEventDispatcher} from "svelte";
  const dispatch = createEventDispatcher();
  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatch('tabChange', item)}>
        <div class:active={item === activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0 1em;
    font-size: 16px;
    cursor: pointer;
  }
  .active {
    color: red;
    border-bottom: 2px solid red;
    padding-bottom: 1em;
  }
</style>