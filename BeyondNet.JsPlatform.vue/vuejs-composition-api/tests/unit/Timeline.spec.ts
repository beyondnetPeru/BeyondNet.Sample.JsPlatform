import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Timeline from "@/components/Timeline.vue";
import { thisMonth, thisWeek, today } from "../../src/mocks";

describe("Timeline", () => {
  it("renders today post default", () => {
    const wrapper = mount(Timeline);

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });

  it("should update when the period Week is clicked", async () => {
    const wrapper = mount(Timeline);

    await wrapper.get('[data-test="This Week"]').trigger("click");

    // wait for the nex frame
    // await nextTick();

    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
  });

  it("should update when the period Month is clicked", async () => {
    const wrapper = mount(Timeline);

    await wrapper.get('[data-test="This Month"]').trigger("click");

    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"));
  });
});
