<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="mt-5">Login</h1>
        <hr />
        <form-tag @myevent="submitHandler" name="myform" event="myevent">
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
    submitHandler() {
      console.log("submitHandler");

      const payload = {
        email: this.email,
        password: this.password,
      };

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      };

      fetch("http://localhost:8081/users/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log(data);
          }
        });
    },
  },
};
</script>
