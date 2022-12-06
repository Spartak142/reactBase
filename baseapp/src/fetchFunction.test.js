import { fetchData } from "./fetchFunction";

test("the data is contain data", async () => {
  const data = await fetchData();
  expect(data).toEqual({
    data: {
      avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
      bio: null,
      blog: "https://hyett.com",
      company: "GitHub, Inc.",
      created_at: "2008-01-07T17:54:22Z",
      email: null,
      events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
      followers: 8218,
      followers_url: "https://api.github.com/users/pjhyett/followers",
      following: 30,
      following_url:
        "https://api.github.com/users/pjhyett/following{/other_user}",
      gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
      gravatar_id: "",
      hireable: null,
      html_url: "https://github.com/pjhyett",
      id: 3,
      location: "San Francisco",
      login: "pjhyett",
      name: "PJ Hyett",
      node_id: "MDQ6VXNlcjM=",
      organizations_url: "https://api.github.com/users/pjhyett/orgs",
      public_gists: 21,
      public_repos: 8,
      received_events_url:
        "https://api.github.com/users/pjhyett/received_events",
      repos_url: "https://api.github.com/users/pjhyett/repos",
      site_admin: false,
      starred_url:
        "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
      twitter_username: null,
      type: "User",
      updated_at: "2022-11-05T18:39:03Z",
      url: "https://api.github.com/users/pjhyett",
    },
  });
});
