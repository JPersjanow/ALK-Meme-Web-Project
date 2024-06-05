// eslint-disable-next-line no-unused-vars
const example = [
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "../assets/1mem",
  },
  {
    title: "Mem 1",
    upvotes: 6,
    downvotes: 0,
    img: "../assets/1mem",
  },
];

// eslint-disable-next-line no-unused-vars
let titlemem = [];

for (let i = 1; i <= 50; i++) {
  titlemem.push(`Mem ${i}`);
}

console.log(titlemem);

let pathmem = [];

for (let i = 1; i <= 50; i++) {
  pathmem.push(`/memes/${i}mem.jpeg`);
}

console.log(pathmem);

let memdatabase0 = [];

for (let i = 0; i < 50; i++) {
  memdatabase0.push({
    id: i + 1,
    title: titlemem[i],
    upvotes: 0,
    downvotes: 0,
    img: pathmem[i],
    added_at: Date.now() + i,
  });
}

console.log(memdatabase0);

// eslint-disable-next-line no-unused-vars
