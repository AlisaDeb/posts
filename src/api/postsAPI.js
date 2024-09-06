export const postsAPI = {
  fetchPosts() {
    try {
      return fetch(
        'https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc&_limit=6'
      )
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (err) {
      console.log(err);
    }
  },

  fetchFreshPosts(limit = 3) {
    try {
      return fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_sort=id&_order=desc`
      )
        .then((response) => response.json())
        .then((posts) => posts);
    } catch (err) {
      console.log(err);
    }
  },

  fetchById(id) {
    try {
      if (!id) {
        throw new Error('Id is broken');
      }
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post);
    } catch (err) {
      console.log(err);
    }
  },
};
