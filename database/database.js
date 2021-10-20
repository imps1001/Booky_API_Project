const books = [
  {
    _id:"6127ce515d43ed0be4aac0ce",
    ISBN: "12345Two",
    title: "Getting Started with Python",
    pubDate: "2021-07-07",
    language: "en",
    numPage: 225,
    author: [1],
    publications: [1],
    category: ["tech","fiction","web dev"]
  },
  {
    _id: "6127cfed5d43ed0be4aac0d0",
    ISBN: "12345ONE",
    title: "Getting Started with MERN",
    pubDate: "2021-07-07",
    language: "en",
    numPage: 225,
    author: [1,2],
    publications: [1],
    category: ["programming","fiction","web dev", "tech"]
  }
]

const author = [
  {
    id: 1,
    name: "Aradhana",
    books: ["12345Book", "secretBook"]
  },
  {
    id: 2,
    name: "Elon Musk",
    books: ["12345Book"]
  }
]
const publication = [
  {
    id: 1,
    name: "writex",
    books: ["12345Book"]
  }
]

module.exports = {books , author , publication};


