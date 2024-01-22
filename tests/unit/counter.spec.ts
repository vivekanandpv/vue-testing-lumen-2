import { assert, expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CounterVue from "@/components/Counter.vue";
import { beforeEach } from "mocha";

describe("Counter Component should", () => {
  it("render banner text", () => {
    const wrapper = shallowMount(CounterVue);

    const h2Text = wrapper.find("h2").text();

    assert.equal(h2Text, "Counter Component");
  });

  it("render the message in p tag", () => {
    const message = "Good morning";

    const wrapper = shallowMount(CounterVue, {
      props: {
        message,
      },
    });

    const pText = wrapper.find('[data-testid="message-holder"]').text();

    assert.equal(pText, message);
  });

  it("render the initial counter", () => {
    const message = "Good morning";

    const wrapper = shallowMount(CounterVue, {
      props: {
        message,
      },
    });

    const h4Text = wrapper.find("h4").text();

    expect(h4Text).to.be.equal("Counter: 0");
  });

  it("render the incremented counter on button click", async () => {
    const message = "Good morning";

    const wrapper = shallowMount(CounterVue, {
      props: {
        message,
      },
    });

    wrapper.find("button").trigger("click");

    await wrapper.vm.$nextTick();

    const h4Text = wrapper.find("h4").text();

    expect(h4Text).to.be.equal("Counter: 1");
  });
});
