const express = require("express");
const cors = require("cors");
const faker = require("faker");

const app = express();

app.use(cors());

const grouptype = [
  "Video Cast",
  "OOH Cast",
  "Pod Cast",
  "Audio Cast",
  "Social Cast"
];

const style = ["center", "left", "right"];
const type = ["image", "video"];
const topics = ['technology', 'computers', 'nature', 'people']

function generateRanNum(count) {
  return Math.floor(Math.random() * (count - 1 + 1) + 1);
}

function generateData() {
  const mockData = [];

  for (let i = 1; i < 6; i++) {
    const data = [];
    const rand = generateRanNum(50);
    for (let i = 1; i < 15; i++) {
      const obj = {
        shop_id: i,
        items: [{ name: faker.company.companyName() }],
        label: faker.lorem.sentence(),
        shop_url: faker.internet.url()
      }

      if (rand===i) {
        const randomCount = generateRanNum(3);
        const dataitems = [];
        for (let i = 1; i <= randomCount; i++) {
          dataitems.push({ name: `${faker.name.firstName()} ${faker.name.lastName()}`})
        }
        obj.items = [...obj.items, ...dataitems];
        obj.media =
          {
            url: `https://source.unsplash.com/1600x900/?${topics[Math.floor(Math.random()*topics.length)]}`,
            alt: faker.lorem.sentence()
          }

      }

      data.push(obj);
    }
    mockData.push({
      section_id: i,
      layout: style[Math.floor(Math.random() * style.length)],
      data
    });
  }

  return mockData;
}

function generateRes() {
  return grouptype.map(group => {
    return {
      group_name: group.toLowerCase().replace(/ /g,''),
      title: group,
      sections: generateData()
    };
  });
  // for (let i = 0; i < 10; i++) {
  //   const content = [];
  //   for (let i = 0; i < 50; i++) {
  //     content.push({
  //       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //       store: faker.company.companyName(),
  //       image: i % 13 === 0 ? faker.image.imageUrl() : undefined
  //     });
  //   }
  //   data.push(content);
  // }

  return data;
}

app.get("/", (req, res) => {
  const data = generateRes();
  res.send(data);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
