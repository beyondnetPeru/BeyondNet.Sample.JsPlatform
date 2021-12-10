import { nextTick } from "vue";
import { flushPromises, mount } from "@vue/test-utils";
import Timeline from "@/components/Timeline.vue";
import { thisMonth, thisWeek, today } from "../../src/mocks";

jest.mock("axios", () => ({
  get: (url: string) => Promise.resolve({ data: [today, thisWeek, thisMonth] }),
}));

function mountTimeline() {
  return mount({
    components: { Timeline },
    template: `
      <suspense>
        <template #default>
          <timeline />
        </template>
        <template #fallback>
          Loading...
        </template>
      </suspense>
      `,
  });
}

describe("Timeline", () => {
  it("renders today post default", async () => {
    const wrapper = mountTimeline();

    await flushPromises();

    expect(wrapper.html()).toContain(today.created.format("Do MMM"));
  });

  it("should update when the period Week is clicked", async () => {
    const wrapper = mountTimeline();

    await flushPromises();

    await wrapper.get('[data-test="This Week"]').trigger("click");

    // wait for the nex frame
    // await nextTick();

    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"));
  });

  it("should update when the period Month is clicked", async () => {
    const wrapper = mountTimeline();

    await flushPromises();

    await wrapper.get('[data-test="This Month"]').trigger("click");

    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"));
  });
});
