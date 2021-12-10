import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { thisMonth, thisWeek, today } from "./mocks";

//mocking axios
// @ts-ignore
axios.get = async (url: string) => {
  if (url === "/posts") {
    await delay();
    return Promise.resolve({
      data: [today, thisWeek, thisMonth],
    });
  }
};

function delay() {
  return new Promise((r) => setTimeout(r, 2000));
}

createApp(App).mount("#app");
