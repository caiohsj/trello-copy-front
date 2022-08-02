import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import i18n from "@/locales";
import { createI18n } from "vue-i18n";
import LoginForm from "@/components/forms/LoginForm.vue";

describe("LoginForm component", () => {
  const wrapper = mount(LoginForm, {
    global: { plugins: [createI18n(i18n)] },
  });
  const form = wrapper.find(".form");
  const inputEmail = wrapper.find("#email");
  const inputPassword = wrapper.find("#password");
  const buttonLogin = wrapper.find("#btn_login");
  const loginParams = {
    email: "meu@email.com",
    password: "minhasenha",
  };

  it("renders form inputs and button", () => {
    expect(inputEmail.exists()).toBeTruthy();
    expect(inputPassword.exists()).toBeTruthy();
    expect(buttonLogin.exists()).toBeTruthy();
  });

  it("emit event submit", () => {
    inputEmail.setValue(loginParams.email);
    inputPassword.setValue(loginParams.password);

    form.trigger("submit.prevent");

    expect(wrapper.emitted()).toHaveProperty("submit");
    expect(wrapper.emitted("submit")[0][0]).toStrictEqual(loginParams);
  });
});
