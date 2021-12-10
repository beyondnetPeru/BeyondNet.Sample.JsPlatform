import { reactive, readonly } from "vue";
import { Post, today, thisWeek, thisMonth } from "./mocks";
import axios from "axios";

interface State {
  posts: PostState;
}

interface PostState {
  ids: string[];
  all: Map<string, Post>;
  loaded: boolean;
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }

  async fetchPosts() {
    const response = await axios.get<Post[]>("/posts");

    const postsState: PostState = {
      all: new Map(),
      ids: [],
      loaded: true,
    };

    for (let post of response.data) {
      postsState.ids.push(post.id);
      postsState.all.set(post.id, post);
    }

    this.state.posts = postsState;
  }
}

const all = new Map<string, Post>();

const store = new Store({
  posts: {
    all,
    ids: [],
    loaded: false,
  },
});

export function useStore() {
  return store;
}
