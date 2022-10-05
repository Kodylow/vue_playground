<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-5">Login</h1>
        <hr />
        <form-tag v-on:myevent="submitHandler" name="myform" event="myevent">
          <text-input
            v-model="email"
            name="email"
            type="email"
            label="Email"
            placeholder="Enter email"
            required="true"
            autocomplete="email"
          />
          <text-input
            v-model="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            required="true"
            autocomplete="password"
          />
          <hr />
          <input type="submit" class="btn btn-primary" value="Login" />
        </form-tag>
      </div>
    </div>
  </div>
</template>

<script>
import FormTag from "./forms/FormTag.vue";
import TextInput from "./forms/TextInput.vue";
export default {
  name: "LoginForm",
  components: {
    FormTag,
    TextInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitHandler: function (event) {
      console.log("submitHandler");
    },
  },
};
</script>
