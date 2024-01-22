import { assert, expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import UserVue from "@/components/User.vue";

describe("User Component should", () => {
  it("render initial message as empty", () => {
    const wrapper = shallowMount(UserVue);

    const inputElement = wrapper.find<HTMLInputElement>(
      '[data-testid="user-input"]'
    ).element;

    expect(inputElement.value).to.equal("");
  });

  it("render new message after button click", async () => {
    const wrapper = shallowMount(UserVue);

    const inputElement = wrapper.find<HTMLInputElement>(
      '[data-testid="user-input"]'
    ).element;

    wrapper.find('[data-testid="change-button"]').trigger("click");

    await wrapper.vm.$nextTick();

    expect(inputElement.value).to.equal("Good day!");
  });
});
