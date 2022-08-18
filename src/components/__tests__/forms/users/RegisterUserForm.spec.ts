import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import i18n from "@/locales";
import RegisterUserForm from "@/components/forms/users/RegisterUserForm.vue";

describe("RegisterUserForm component", () => {
  const wrapper = mount(RegisterUserForm, {
    global: { plugins: [i18n] },
  });
  const form = wrapper.find(".form");
  const inputName = wrapper.find("#name");
  const inputEmail = wrapper.find("#email");
  const inputPassword = wrapper.find("#password");
  const buttonRegister = wrapper.find("#btn_register");
  const registerParams = {
    name: "Meu nome",
    email: "meu@email.com",
    password: "minhasenha",
  };

  it("renders form inputs and button", () => {
    expect(inputName.exists()).toBeTruthy();
    expect(inputEmail.exists()).toBeTruthy();
    expect(inputPassword.exists()).toBeTruthy();
    expect(buttonRegister.exists()).toBeTruthy();
  });

  it("emit event submit", () => {
    inputName.setValue(registerParams.name);
    inputEmail.setValue(registerParams.email);
    inputPassword.setValue(registerParams.password);

    form.trigger("submit.prevent");

    expect(wrapper.emitted()).toHaveProperty("submit");
    expect(wrapper.emitted("submit")[0][0]).toStrictEqual(registerParams);
  });
});
