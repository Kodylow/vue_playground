const TextInput = {
  props: {
    name: String,
    type: String,
    label: String,
    placeholder: String,
    required: String,
    min: String,
    max: String,
    value: String,
  },
  template: `
          <div class="mb-3">
            <label :for="name" class="form-label">{{ label }}</label>
            <input
              :type="type"
              class="form-control"
              :id="name"
              :name="name"
              :placeholder="placeholder"
              :required="required"
              :min="min"
              :max="max"
              :value="value"
              :autocomplete="name +'-new'"
              class="form-control"
            />
          </div>
        `,
};

const SelectInput = {
  props: ["items", "name", "label", "required"],
  template: `
          <div class="mb-3">
            <label :for="name" class="form-label">{{ label }}</label>
            <select :name="name" :id="name" :required="required" class="form-select">
              <option v-for="item in items" :value="item.value">{{ item.text }}</option>
            </select>
          </div>
  `,
};

const CheckInput = {
  props: ["name", "label", "required", "value", "checked"],
  template: `
          <div class="mb-3 form-check">
            <input :name="name" :checked="checked" :id="name" :required="required" :value="value" type="checkbox" class="form-check-input">
            <label :for="name" class="form-check-label">{{ label }}</label>
          </div>
  `,
};
