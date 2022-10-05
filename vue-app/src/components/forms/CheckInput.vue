<template>
  <div class="form-check">
    <input
      type="check"
      class="form-check-input"
      :checked="checked"
      :required="required"
    />
    <label :for="name" class="form-check-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "CheckInput",
  props: ["name", "label", "required", "checked"],
};
</script>
