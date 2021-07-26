<script>
  import Button from '../shared/Button.svelte';
  let fields = {question: '', answerA: '', answerB: ''};
  let errors = {question: '', answerA: '', answerB: ''};
  let valid = false;
  const submitHandler = () => {
    valid = true;
    
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Question must be at least 5 characters';
    } else {
      errors.question = '';
    }
    if (fields.answerA.trim().length  < 1) {
      valid = false;
      errors.answerA = 'Answer A must be at most 1 character';
    } else {
      errors.answerA = '';
    }
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'Answer B must be at most 1 character';
    } else {
      errors.answerB = '';
    }

    if (valid) {
      console.log('valid :>> ', fields);
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">question</label>
    <input type="text" id="question" bind:value={fields.question}>
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">answer-a</label>
    <input type="text" id="answer-a" bind:value={fields.answerA}>
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">answer-b</label>
    <input type="text" id="answer-b" bind:value={fields.answerB}>
    <div class="error">{errors.answerB}</div>
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
  .error {
    color: red;
    font-weight: bold;
    font-size: 12px;
  }

</style>