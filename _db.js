let names = [
  { id: "1", name: "John Doe", langKnown: ["English", "Spanish"] },
  { id: "2", name: "Alice Smith", langKnown: ["French", "German"] },
  { id: "3", name: "Bob Johnson", langKnown: ["Japanese", "Chinese"] },
  { id: "4", name: "Mary Brown", langKnown: ["Italian", "Russian"] },
  { id: "5", name: "Sam Wilson", langKnown: ["Portuguese", "Korean"] },
];

let reviews = [
  {
    id: "1",
    rating: 4,
    content: "Great product, highly recommended!",
    author_id: "1",
    name_id: "2",
  },
  {
    id: "2",
    rating: 5,
    content: "Amazing service, exceeded my expectations",
    author_id: "2",
    name_id: "3",
  },
  {
    id: "3",
    rating: 3,
    content: "Decent, but could be improved",
    author_id: "3",
    name_id: "1",
  },
  {
    id: "4",
    rating: 2,
    content: "Not satisfied with the purchase",
    author_id: "4",
    name_id: "4",
  },
  {
    id: "5",
    rating: 5,
    content: "Exceptional quality and fast delivery",
    author_id: "5",
    name_id: "5",
  },
];

let authors = [
  { id: "1", name: "John Doe", verified: true },
  { id: "2", name: "Alice Smith", verified: false },
  { id: "3", name: "Bob Johnson", verified: true },
  { id: "4", name: "Mary Brown", verified: false },
  { id: "5", name: "Sam Wilson", verified: true },
];

export default { names, reviews, authors };
