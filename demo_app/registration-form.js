const RegistrationForm = {
  data() {
    return {
      addressSameChecked: true,
    };
  },
  props: ["items"],
  template: `
    <h3>Registration Form</h3>
    <hr>
    <form autocomplete="off" class="needs-validation" novalidate>
      <text-input label="First Name" name="first-name" required=="true" type="text"></text-input>
      <text-input label="Last Name" name="last-name" required=="true" type="text"></text-input>
      <text-input label="Email" name="email" required=="true" type="email"></text-input>
      <text-input label="Password" name="password" required=="true" type="password"></text-input>
      <select-input label="Favorite-Color" name="favorite-color" :items="items"></select-input>
      

      <text-input label="Address" name="address" required=="true" type="text"></text-input>
      <text-input label="City" name="city" required=="true" type="text"></text-input>
      <text-input label="State" name="state" required=="true" type="text"></text-input>
      <text-input label="Zip" name="zip" required=="true" type="text"></text-input>

      <check-input v-on:click="addressSame" label="Billing address is the same as shipping address" checked="true" v-model="addressSameChecked"></check-input>
      
      <div class="mt-3" v-if="!addressSameChecked">
        <text-input label="Billing Address" name="address2" type="text"></text-input>
        <text-input label="Billing City" name="city2" type="text"></text-input>
        <text-input label="Billing State" name="state2" type="text"></text-input>
        <text-input label="Billing Zip" name="zip2" type="text"></text-input>
      </div>
      <check-input label="I agree to the terms and conditions" required=="true"></check-input>
      <hr>
      <input type="submit" class="btn btn-primary" value="Register">
      </form>
    `,
  methods: {
    addressSame() {
      this.addressSameChecked = !this.addressSameChecked;
    },
  },
  components: {
    "text-input": TextInput,
    "select-input": SelectInput,
    "check-input": CheckInput,
  },
  mounted() {
    (function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
