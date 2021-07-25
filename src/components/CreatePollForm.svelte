<script>
  import Button from '../shared/Button.svelte';
  let fields = {question: '', answerA: '', answerB: ''}
  const submitHandler = () => {
    console.log('fields :>> ', fields);
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">question</label>
    <input type="text" id="question" bind:value={fields.question}>
  </div>
  <div class="form-field">
    <label for="answer-a">answer-a</label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
  </div>
  <div class="form-field">
    <label for="answer-b">answer-b</label>
    <input type="text" id="answer-b" bind:value={fields.answerB}>
  </div>
  <Button type="secondary">Add poll</Button>

</form>
<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    width: 20px auto;
  }
  input {
    width: 100%;
  }
  label {
    width: 10px auto;
    text-align: left;
  }

</style>