const Post = [
  {
    id: 1,
    country: "india",
    state: [
      {
        id: 1,
        state: "gujarat",
        city: [
          { id: 1, city: "ahmedabad" },
          { id: 2, city: "surat" },
          { id: 3, city: "vadodara" },
        ],
      },
      {
        id: 2,
        state: "bihar",
        city: [
          { id: 1, city: "patna" },
          { id: 2, city: "gaya" },
          { id: 3, city: "bhagalpur" },
        ],
      },
    ],
  },
  {
    id: 2,
    country: "usa",
    state: [
      {
        id: 1,
        state: "alaska",
        city: [
          { id: 1, city: "anchorage" },
          { id: 2, city: "fairbanks" },
        ],
      },
      {
        id: 2,
        state: "california",
        city: [
          { id: 1, city: "los angeles" },
          { id: 2, city: "san francisco" },
          { id: 3, city: "san diego" },
        ],
      },
    ],
  },
  {
    id: 3,
    country: "uk",
    state: [
      {
        id: 1,
        state: "england",
        city: [
          { id: 1, city: "london" },
          { id: 2, city: "manchester" },
          { id: 3, city: "birmingham" },
        ],
      },
      {
        id: 2,
        state: "scotland",
        city: [
          { id: 1, city: "edinburgh" },
          { id: 2, city: "glasgow" },
        ],
      },
    ],
  },
];

export default Post;
