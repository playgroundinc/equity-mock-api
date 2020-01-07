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
const topics = ['technology', 'computers', 'nature', 'people']

function generateRanNum(count) {
  return Math.floor(Math.random() * (count - 1 + 1) + 1);
}

function generateData() {
  const mockData = [];

  for (let i = 1; i < 6; i++) {
    const merchants = [];
    const rand = generateRanNum(50);
    let media = {};
    for (let i = 1; i < 15; i++) {
      const obj = {
        shop_id: i,
        products: [{ name: faker.company.companyName(), url: faker.internet.url() }],
        shop_name: faker.lorem.sentence(),
        shop_url: faker.internet.url(),
      }

      if (rand===i) {
        const randomCount = generateRanNum(3);
        const dataitems = [];
        for (let i = 1; i <= randomCount; i++) {
          dataitems.push({ name: faker.company.companyName(), url: faker.internet.url() })
        }
        obj.products = [...obj.products, ...dataitems];
        obj.image =
          {
            url: `https://source.unsplash.com/1600x900/?${topics[Math.floor(Math.random()*topics.length)]}`,
            alt: faker.lorem.sentence()
          }
          media = {
            url: `https://source.unsplash.com/1600x900/?${topics[Math.floor(Math.random()*topics.length)]}`,
            alt: faker.lorem.sentence()
          }
      }

      merchants.push(obj);
    }
    mockData.push({
      section_id: i,
      layout: style[Math.floor(Math.random() * style.length)],
      label: faker.lorem.words(),
      media,
      merchants
    });
  }

  return mockData;
}

function generateRes() {
  return grouptype.map((group, i) => {
    let media = {};
    if (i == 1) {
      media = { url: `https://source.unsplash.com/1600x900/?${topics[Math.floor(Math.random()*topics.length)]}`, alt: faker.lorem.sentence() }
    }
    return {
      group_name: group.toLowerCase().replace(/ /g,''),
      title: group,
      media,
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
  res.send(
    [
      {
        "groupname": "Video",
        "title": "Video Production",
        "media": {

        },
        "sections": [
          {
            "section_id": 1,
            "layout": "center",
            "label": "",
            "media": {

            },
            "merchants": [
              {
                "shop_id": 5286297671,
                "shop_name": "1767 Designs",
                "shop_url": "https://1767designs.com/",
                "products": [
                  "Ensley - Copper wall art"
                ]
              },
              {
                "shop_id": 16828743,
                "shop_name": "1820 House",
                "shop_url": "https://1820house.com/",
                "products": [
                  "Rust Belt Collective candle"
                ]
              },
              {
                "shop_id": 286132,
                "shop_name": "3sixteen",
                "shop_url": "https://www.3sixteen.com/",
                "products": [

                ]
              },
              {
                "shop_id": 6105727045,
                "shop_ame": "A Good Company",
                "shop_url": "https://agood.com/",
                "products": [
                  "A Good Glue Stick"
                ]
              },
              {
                "shop_id": 6700825,
                "shop_name": "Aelfie",
                "shop_url": "https://aelfie.com/",
                "products": [
                  "Suzanne Flat-Weave Rug",
                  "Sun Dipped Tapestry"
                ]
              },
              {
                "shop_id": 2858178,
                "shop_name": "Alchemy Works",
                "shop_url": "https://www.alchemyworks.us/",
                "products": [
                  "Yolo Journal + Apolis For Alchemy Works Striped Long Handle Tote"
                ]
              },
              {
                "shop_id": 2695790705,
                "shop_name": "Allan’s Pet Center",
                "shop_url": "https://allanspetcenter.com/",
                "products": [
                  "Tank Decorations"
                ]
              },
              {
                "shop_id": 27227484,
                "shop_name": "Aloha Bars",
                "shop_url": "https://aloha.com/",
                "products": [
                  "Peanut Butter Chocolate Chip Protein Bar"
                ]
              },
              {
                "shop_id": 10808710,
                "shop_name": "AMQN Boutique",
                "shop_url": "https://amqnboutique.com/",
                "products": [
                  "Danni Gold Chain Link Hoop Earrings"
                ]
              },
              {
                "shop_id": 25578570,
                "shop_name": "And Comfort",
                "shop_url": "https://www.andcomfort.com/",
                "products": [
                  "The Cambridge Tie Dress"
                ]
              },
              {
                "shop_id": 17442037,
                "shop_name": "Any Occasion Balloons",
                "shop_url": "https://anyoccasionballoons.com/",
                "products": [
                  "Loose Balloons"
                ]
              },
              {
                "shop_id": 11411330,
                "shop_name": "Aquarium Fish Sale",
                "shop_url": "https://www.aquariumfishsale.com/",
                "products": [
                  "Freshwater Fish"
                ]
              },
              {
                "shop_id": 9317858,
                "shop_name": "Art of Melodious",
                "shop_url": "www.artofmelodious.com",
                "products": [
                  "Flamingo Art Print"
                ]
              },
              {
                "shop_id": 8732618,
                "shop_name": "Avitals Apiaries",
                "shop_url": "https://shopavitals.com/",
                "products": [
                  "Grapefruit & Rosemary Conditioner Bar"
                ]
              },
              {
                "shop_id": 372932672,
                "shop_name": "Baby Tress",
                "shop_url": "https://babytress.com/",
                "products": [
                  "Edge Styler"
                ]
              },
              {
                "shop_id": 8513262,
                "shop_name": "Baggu",
                "shop_url": "https://baggu.com/",
                "products": [
                  "Net Baggu"
                ]
              },
              {
                "shop_id": 29896066,
                "shop_name": "Bakell",
                "shop_url": "https://bakell.com/",
                "products": [
                  "Airbrush Professional Series Gun Kit"
                ]
              },
              {
                "shop_id": 7350995,
                "shop_name": "Bannor Toy",
                "shop_url": "https://bannortoys.com/",
                "products": [
                  "Wooden Toy Keys"
                ]
              },
              {
                "shop_id": 2317507,
                "shop_name": "Bend Goods",
                "shop_url": "https://bendgoods.com/",
                "products": [
                  "Cloud Bench",
                  "Peacock Lounge"
                ]
              },
              {
                "shop_id": 10154487,
                "shop_name": "Best Self",
                "shop_url": "https://bestself.co/",
                "products": [
                  "Self planner",
                  "Icebreaker Deck"
                ],
                "image": { "url": "https://source.unsplash.com/1600x900/?technology", "alt": "test content" }
              },
              {
                "shop_id": 1003792,
                "shop_name": "Better Life",
                "shop_url": "https://www.cleanhappens.com/",
                "products": [
                  "Naturally Dirt-Destroying Floor Cleaner"
                ]
              },
              {
                "shop_id": 2335506497,
                "shop_name": "Bibim Paws",
                "shop_url": "https://bibimpaws.com",
                "products": [
                  "Cod Liver Oil - Pet Supplement",
                  "Turducken Me - Turkey + Duck Jerky Treats for Cats + Dogs",
                  "DIY Superfood Sauce Mix"
                ]
              },
              {
                "shop_id": 6669741,
                "shop_name": "BioLite Energy",
                "shop_url": "https://www.bioliteenergy.com/",
                "products": [
                  "SunLight Portable Solar Light"
                ]
              },
              {
                "shop_id": 8553846,
                "shop_name": "BLACKBARN Shop",
                "shop_url": "https://www.blackbarnshop.com/",
                "products": [
                  "EGG Ceramic Cup"
                ]
              },
              {
                "shop_id": 21788307,
                "shop_name": "Blacksaw",
                "shop_url": "https://blacksaw.co/",
                "products": [
                  "Yoko Reversible Throw"
                ]
              },
              {
                "shop_id": 8374791,
                "shop_name": "Blankie Tails",
                "shop_url": "https://www.blankietails.com/",
                "products": [
                  "Baby Shark Baby Tails"
                ]
              },
              {
                "shop_id": 11195850,
                "shop_name": "Bombas",
                "shop_url": "http://bombas.com/",
                "products": [
                  "Women\"s All-Ankle Sock 12-Pack",
                  "Men\"s Merino Wool Calf Sock 8-Pack"
                ]
              },
              {
                "shop_id": 8258949,
                "shop_name": "Booooooom.com",
                "shop_url": "https://shop.booooooom.com/",
                "products": [
                  "Big Sticker Pack"
                ]
              },
              {
                "shop_id": 8851096,
                "shop_name": "Bottle Keeper",
                "shop_url": "bottlekeeper.com",
                "products": [
                  "The Standard 2.0 - Neo Chrome"
                ]
              },
              {
                "shop_id": 6894944323,
                "shop_name": "Boysmells",
                "shop_url": "https://boysmells.com/",
                "products": [
                  "Cinderose candle"
                ]
              },
              {
                "shop_id": 11550310,
                "shop_name": "Brighton Beauty",
                "shop_url": "https://brightonbeautysupply.com/",
                "products": [
                  "Framesi Coloring Tint Brush"
                ]
              },
              {
                "shop_id": 2676719676,
                "shop_name": "Bripe",
                "shop_url": "https://briping.com/",
                "products": [
                  "Coffee Brew Pipe Kit"
                ]
              },
              {
                "shop_id": 3728301,
                "shop_name": "Brooklyn City Furniture",
                "shop_url": "https://cityfurnitureshop.com/",
                "products": [
                  "Algebra Desk",
                  "Wallace Chair",
                  "Headdemock Outdoor",
                  "Christy Bench • Mango"
                ]
              },
              {
                "shop_id": 3450689,
                "shop_name": "Bulb America",
                "shop_url": "https://www.bulbamerica.com/",
                "products": [
                  "Philips 50w 100w 150w A-Shape A21 3 Contact DuraMax Three Way Incandescent Light Bulb"
                ]
              },
              {
                "shop_id": 2023990.0,
                "shop_name": "CA Modern Home",
                "shop_url": "https://camodernhome.com/",
                "products": [
                  "Centro Lift Desk"
                ]
              },
              {
                "shop_id": 11971680,
                "shop_name": "Cape Clasp",
                "shop_url": "https://www.capeclasp.com/",
                "products": [
                  "Whale Clasp"
                ]
              },
              {
                "shop_id": 10501587002,
                "shop_name": "Casa Blanca Coffee",
                "shop_url": "https://www.casablancacoffee.co/",
                "products": [
                  "Casa Blanca Logo Mug"
                ]
              },
              {
                "shop_id": 14636454,
                "shop_name": "Casa Gear",
                "shop_url": "https://casagear.com",
                "products": [
                  "Engage Upholstered Armchair Laguna",
                  "4D Concepts Arlington Wall Shelf with Desk",
                  "3 Piece Carpina Home Floating Ladder Shelf Office Desk",
                  "Risa End Table",
                  "Mango Wood Coffee Table"
                ]
              },
              {
                "shop_id": 2366046265,
                "shop_name": "Cat Tree King",
                "shop_url": "https://cattreeking.com/",
                "products": [
                  "Cat Mansion Beige"
                ]
              },
              {
                "shop_id": 7049904194,
                "shop_name": "CatSchool.co",
                "shop_url": "https://www.catschool.co/",
                "products": [
                  "The Cat Training Kit"
                ]
              },
              {
                "shop_id": 3559157,
                "shop_name": "Centuria Vintage",
                "shop_url": "https://www.centuriavintage.com/",
                "products": [
                  "Linen and Nailhead Cabinet",
                  "Boho Rattan Armchair",
                  "Vintage 70s Boho Art Hanging",
                  "Modern Minimilist Walnut and Brass Shelving Unit"
                ]
              },
              {
                "shop_id": 4465066084.0,
                "shop_name": "Chad Isham",
                "shop_url": "https://shop.chadisham.com",
                "products": [
                  "Vintage Moroccan Rug",
                  "Vintage Wall Lamp"
                ]
              },
              {
                "shop_id": 9906744,
                "shop_name": "Chocolate Man",
                "shop_url": "https://www.chocolateman.com/",
                "products": [
                  "Marble Slab"
                ]
              },
              {
                "shop_id": 10789302,
                "shop_name": "Coast Chimes",
                "shop_url": "https://www.coastchimes.com/",
                "products": [
                  "Copper and Sea Glass Outdoor Wind Chime"
                ]
              },
              {
                "shop_id": 2813004,
                "shop_name": "Coco’s Variety",
                "shop_url": "https://cocosvariety.com/",
                "products": [
                  "Linus Roadster 8-speed",
                  "Linus Li Roadster 16\\\\"
                ]
              },
              {
                "shop_id": 2437615,
                "shop_name": "Collyer’s Mansion",
                "shop_url": "https://shopthemansion.com/",
                "products": [
                  "Kobe Oak Pendant light",
                  "20\\\\ Round Pouf",
                  "La Piscine Rose",
                  "Dark Blue Vintage Kilim"
                ]
              },
              {
                "shop_id": 13380845,
                "shop_name": "Colour Pop",
                "shop_url": "thttps://colourpop.com/",
                "products": [
                  "Makeup Brush Bundle"
                ]
              },
              {
                "shop_id": 22917581,
                "shop_name": "Cook Potluck",
                "shop_url": "https://cookpotluck.com/",
                "products": [
                  "Utensil Set"
                ]
              },
              {
                "shop_id": 4523097,
                "shop_name": "CoolSnowGlobes",
                "shop_url": "https://coolsnowglobes.com/",
                "products": [
                  "Eclipse Snow Globe"
                ]
              },
              {
                "shop_id": 1546518592,
                "shop_name": "Coterie Party",
                "shop_url": "https://coterieparty.com",
                "products": [
                  "Number Balloon Bouquet",

                ]
              },
              {
                "shop_id": 986552,
                "shop_name": "Croft House",
                "shop_url": "https://www.crofthouse.com/",
                "products": [
                  "Utensils"
                ]
              },
              {
                "shop_id": 4299477,
                "shop_name": "Cultural Interiors",
                "shop_url": "https://www.culturalinteriors.com/",
                "products": [
                  "Side Tables"
                ]
              },
              {
                "shop_id": 10602118,
                "shop_name": "CXBO",
                "shop_url": "http://cxbochocolates.com",
                "products": [
                  "Signature Bonbon Collection",
                  "Disco Egg",
                  "Signature Bar Collection"
                ]
              },
              {
                "shop_id": 10416448,
                "shop_name": "Davon Sales",
                "shop_url": "https://davsonsales.com/",
                "products": [
                  "Tooloud Lovin You Pho Eva Fridge Magnet"
                ]
              },
              {
                "shop_id": 423329852,
                "shop_name": "Depuis Toujours",
                "shop_url": "https://toujours.tv/",
                "products": [
                  "Herringbone Tweed & Corduroy Bomber"
                ]
              },
              {
                "shop_id": 12556547,
                "shop_name": "Detroit Denim",
                "shop_url": "https://detroitdenim.com/",
                "products": [
                  "Bandana",
                  "Crewneck Sweatshirt",
                  "Classic Cut"
                ]
              },
              {
                "shop_id": 26603156,
                "shop_name": "Dodo Case",
                "shop_url": "https://www.dodocase.com/",
                "products": [
                  "Durable Portfolio Case"
                ]
              },
              {
                "shop_id": 3592749129,
                "shop_name": "EAP Innovations",
                "shop_url": "www.eapinnovations.com",
                "products": [
                  "Anchor 11221 16 Oz Round Mason Jar"
                ]
              },
              {
                "shop_id": 17243987,
                "shop_name": "Eggy",
                "shop_url": "https://www.shopeggy.com/",
                "products": [
                  "Classic Footie Romper - White",
                  "Pink Beanie"
                ]
              },
              {
                "shop_id": 7614922867,
                "shop_name": "Elizabeth Benotti Ceramics",
                "shop_url": "https://elizabethbenotti.com/",
                "products": [
                  "Round Pinched Planter"
                ]
              },
              {
                "shop_id": 5272397,
                "shop_name": "Emily McDowell",
                "shop_url": "https://emilymcdowell.com/",
                "products": [
                  "Lisa Congdon Capricorn Zodiac Magnet"
                ]
              },
              {
                "shop_id": 11172112,
                "shop_name": "Ergodriven",
                "shop_url": "https://ergodriven.com/",
                "products": [
                  "Topo Mini | The Not-flat Standing Desk Anti-fatigue Mat With Calculated Terrain"
                ]
              },
              {
                "shop_id": 4382261337,
                "shop_name": "Essence Luxe Couture",
                "shop_url": "https://essenceluxecouture.com/",
                "products": [
                  "Multiple Wigs"
                ]
              },
              {
                "shop_id": 20915467,
                "shop_name": "Facile",
                "shop_url": "https://www.facileskin.com/",
                "products": [
                  "Tinted SPF"
                ]
              },
              {
                "shop_id": 17083755,
                "shop_name": "Feather Fox",
                "shop_url": "https://www.featherfox.com.au/",
                "products": [
                  "Blue Paisley Women’s Scarf"
                ]
              },
              {
                "shop_id": 2490020,
                "shop_name": "Fido Biotics",
                "shop_url": "https://www.fidobiotics.com/",
                "products": [
                  "Calm Down Kitty Salmon Sushi"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Flair and Paper",
                "shop_url": "https://www.flairandpaper.com/",
                "products": [
                  "Hello Gorgeous Notepad"
                ]
              },
              {
                "shop_id": 25340477537,
                "shop_name": "Flair Home Collection",
                "shop_url": "https://flairhomecollection.com/",
                "products": [
                  "Vintage Beni Ourain Rug",
                  "Vintage Milo Baughman Barrel Back Lounge Chair in Camel Velvet",
                  "Beni Ourain Moroccan Rug Diamond Pattern"
                ]
              },
              {
                "shop_id": 1161658421,
                "shop_name": "Fluff Alpaca",
                "shop_url": "https://fluffalpaca.com/",
                "products": [
                  "Men\"s Jersey Knit V-Neck Sweater",
                  "Ouef Cloud Pillow"
                ]
              },
              {
                "shop_id": 26456534,
                "shop_name": "France & Son",
                "shop_url": "https://www.franceandson.com/",
                "products": [
                  "Atlas 1 Light Floor Lamp"
                ]
              },
              {
                "shop_id": 26329088075,
                "shop_name": "Fringe Studio",
                "shop_url": "https://petshop.fringestudio.com/",
                "products": [
                  "Gallery Detroit Pet Bowl",
                  "Rosé Dog Toy",
                  "Funny Cat Canvas Tote",
                  "Miss Kitty Canvas Dog Toy",
                  "Good Doggie Ceramic Treat Jar"
                ]
              },
              {
                "shop_id": 1640912,
                "shop_name": "From The Source",
                "shop_url": "https://www.ftsny.com/",
                "products": [
                  "Scout + Corvus Desk"
                ]
              },
              {
                "shop_id": 15190256,
                "shop_name": "Gex Worldwide",
                "shop_url": "https://www.gexworldwide.com/",
                "products": [
                  "Gex Cork Canvas Block Head And Mannequin Head Tripod Combo"
                ]
              },
              {
                "shop_id": 7417947,
                "shop_name": "Gindos",
                "shop_url": "www.gindos.com",
                "products": [
                  "Gindo’s Jalapeno Poblano"
                ]
              },
              {
                "shop_id": 26210424,
                "shop_name": "Glove Nation",
                "shop_url": "https://glovenation.com/",
                "products": [
                  "Bandit Black Powder Free Vinyl Gloves"
                ]
              },
              {
                "shop_id": 13334083,
                "shop_name": "Good Steps",
                "shop_url": "https://www.goodsteps.com/",
                "products": [
                  "Women’s original"
                ]
              },
              {
                "shop_id": 2152392,
                "shop_name": "Gus Modern",
                "shop_url": "https://gusmodern.com/",
                "products": [
                  "Margot Sofa"
                ]
              },
              {
                "shop_id": 5436801113,
                "shop_name": "HairArt",
                "shop_url": "https://hairartproducts.com/",
                "products": [
                  "Deluxe Display Mannequins"
                ]
              },
              {
                "shop_id": 10202551,
                "shop_name": "Hawkins New York",
                "shop_url": "https://www.hawkinsnewyork.com/",
                "products": [
                  "Mara Utility Canister",
                  "Simple Mohair Throw"
                ]
              },
              {
                "shop_id": 11763548,
                "shop_name": "Hazel Village",
                "shop_url": "https://hazelvillage.com/",
                "products": [
                  "Lewis Toad"
                ]
              },
              {
                "shop_id": 2248474690,
                "shop_name": "Heart Bowl",
                "shop_url": "https://myheartbowl.com/",
                "products": [
                  "Ceramic Heart Bowl 2.0"
                ]
              },
              {
                "shop_id": 1870608,
                "shop_name": "Hedley & Bennett",
                "shop_url": "https://www.hedleyandbennett.com/",
                "products": [
                  "Dashi Big Apron"
                ]
              },
              {
                "shop_id": 16957617,
                "shop_name": "Hijabs & Stuff",
                "shop_url": "https://www.hijabsandstuff.com/",
                "products": [
                  "Turban - White Silver"
                ]
              },
              {
                "shop_id": 9938752,
                "shop_name": "Hip Baby Wrap",
                "shop_url": "https://www.hipbabywrap.com/",
                "products": [
                  "Turquoise Woven Wrap"
                ]
              },
              {
                "shop_id": 18502479,
                "shop_name": "Horti",
                "shop_url": "https://heyhorti.com/",
                "products": [
                  "Old Fashioned mister"
                ]
              },
              {
                "shop_id": 11877310,
                "shop_name": "Hudson Wilder",
                "shop_url": "https://hudsonwilder.com/",
                "products": [
                  "Damek Charcoal Line Bowls"
                ]
              },
              {
                "shop_id": 8427283,
                "shop_name": "Hunted Fox",
                "shop_url": "https://huntedfox.co/",
                "products": [
                  "Modern Boho | Vintage African Indigo Accent Pillow",
                  "Modern Boho | Neon Vintage African Indigo Accent Pillow"
                ]
              },
              {
                "shop_id": 8664812,
                "shop_name": "Huset",
                "shop_url": "https://huset-shop.com/",
                "products": [
                  "Ferm Living Quilt Cushions w/ Brass Zipper"
                ]
              },
              {
                "shop_id": 1320812591,
                "shop_name": "I Love Smencils",
                "shop_url": "https://ilovesmencils.com/",
                "products": [
                  "Tri-Color Grip Smens"
                ]
              },
              {
                "shop_id": 13924193,
                "shop_name": "ijji",
                "shop_url": "https://ijji.co/",
                "products": [
                  "Canvas Work Pants"
                ]
              },
              {
                "shop_id": 1809709,
                "shop_name": "ILoveMole.com",
                "shop_url": "https://store.ilovemole.com/",
                "products": [
                  "Mole Coloradito Paste"
                ]
              },
              {
                "shop_id": 21338945,
                "shop_name": "In The Vintage Kitchen Shop",
                "shop_url": "https://shopinthevintagekitchen.com/",
                "products": [
                  "Vintage Wooden Fruit Crate"
                ]
              },
              {
                "shop_id": 12555759,
                "shop_name": "Jennifer Meyer",
                "shop_url": "https://jennifermeyer.com/",
                "products": [
                  "Mini Leaf Necklace"
                ]
              },
              {
                "shop_id": 26328792,
                "shop_name": "Kebbek Skateboards",
                "shop_url": "https://www.kebbekskateboards.com/",
                "products": [
                  "Tepakan Wheels"
                ]
              },
              {
                "shop_id": 11403964,
                "shop_name": "Kikkerland",
                "shop_url": "https://kikkerland.com/",
                "products": [
                  "Pizza Night Light"
                ]
              },
              {
                "shop_id": 27087620,
                "shop_name": "Kin Euphorics",
                "shop_url": "https://shop.kineuphorics.com/",
                "products": [
                  "High Rhode"
                ]
              },
              {
                "shop_id": 8125137,
                "shop_name": "Kinderpack",
                "shop_url": "https://mykinderpack.com/",
                "products": [
                  "Sloth Life with Koolnit"
                ]
              },
              {
                "shop_id": 20348667,
                "shop_name": "Kinto",
                "shop_url": "https://kinto-usa.com/",
                "products": [
                  "Aqua Culture Vase 80mm"
                ]
              },
              {
                "shop_id": 7410191,
                "shop_name": "Kohezi",
                "shop_url": "https://www.kohezi.com/",
                "products": [
                  "Ystudio - Resin Rollerball Pen"
                ]
              },
              {
                "shop_id": 6461285,
                "shop_name": "Koio",
                "shop_url": "https://www.koio.co/",
                "products": [
                  "Capri Fiore",
                  "Capri Roccia",
                  "Capri Triple White",
                  "Capri Onyx Men",
                  "Capri Perla"
                ]
              },
              {
                "shop_id": 4431478899,
                "shop_name": "Kuze",
                "shop_url": "https://kuzefukuandsons.com/",
                "products": [
                  "Organic Fruit Vinegar Drink"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Laura Davidson Direct",
                "shop_url": "https://www.lauradavidsondirect.com/",
                "products": [
                  "SOHO Ribbed Management Chair"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Leopara Makeup Lights",
                "shop_url": "https://leopara.com/",
                "products": [
                  "Leopara Makeup Lighting System"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Light Provisions",
                "shop_url": "https://www.lightprovisions.com/",
                "products": [
                  "Beeswax Taper Candles"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Liquid Sands Glass Gallery",
                "shop_url": "https://liquidsandsgallery.com/",
                "products": [
                  "Cane Bowls"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Loog",
                "shop_url": "https://loogguitars.com/",
                "products": [
                  "Loog Pro Electric Guitar"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Love xo Piper",
                "shop_url": "https://lovepiper.com/",
                "products": [
                  "Acacia Kuau Throw"
                ]
              }
            ]
          },
          {
            "section_id": 1,
            "layout": "left",
            "label": "",
            "media": {

            },
            "merchants": [
              {
                "shop_id": "",
                "shop_name": "Lovevery",
                "shop_url": "https://lovevery.com/",
                "products": [
                  "The Play Gym"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "LunchSkins",
                "shop_url": "https://www.lunchskins.com/",
                "products": [
                  "Reusable Snack Bag Red Cactus"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Lux Eros",
                "shop_url": "https://lux-eros.com/",
                "products": [
                  "Pyramid Pet - Envy"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Mac Demarco",
                "shop_url": "https://shop.mac-demarco.com/",
                "products": [
                  "Mac’s Record Label"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Made by Cleo",
                "shop_url": "https://www.madebycleo.com/",
                "products": [
                  "Velvet Bow Tie Cat Collar Set"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Magnolia",
                "shop_url": "https://shop.magnolia.com/",
                "products": [
                  "The World Needs Sign"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Mannequin Madness",
                "shop_url": "https://www.mannequinmadness.com/",
                "products": [
                  "Abstract Female Mannequin Head",

                ],
                "image": { "url": "https://source.unsplash.com/1600x900/?technology", "alt": "test content" }
              },
              {
                "shop_id": "",
                "shop_name": "Matters of Space",
                "shop_url": "https://shop.mattersofspace.com/",
                "products": [
                  "Dusen Dusen Slice Pillow",
                  "Ferm Living Landscape Cushion",
                  "6 Cup Chemex Coffee Maker"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Max-Bone",
                "shop_url": "https://www.max-bone.com/",
                "products": [
                  "Mouse Felt Toy"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "memobottle",
                "shop_url": "https://www.memobottle.us/",
                "products": [
                  "A7 memobottle"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Meow Skateboards",
                "shop_url": "https://meowskateboards.com/",
                "products": [
                  "Vanessa Torres Your Paradise"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Meso Goods",
                "shop_url": "https://www.mesogoods.com/",
                "products": [
                  "Volcán Wall Art",
                  "Sunshine Wall Art",
                  "Oka Wall Art",
                  "Ela Planter"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Mini Melanie",
                "shop_url": "https://minimelanie.com/",
                "products": [
                  "Signature Mix Box"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Modern Relik",
                "shop_url": "https://www.modernrelik.com/",
                "products": [
                  "African HALF ’n Half Basket"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Modern Sprout",
                "shop_url": "https://store.modsprout.com/",
                "products": [
                  "Mister"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Modern Wood Cases",
                "shop_url": "https://modernwoodcases.com/",
                "products": [
                  "Walnut - Black Protective Phone Case - 100% Real Wood"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Modernica",
                "shop_url": "https://modernica.net/",
                "products": [
                  "Case Study Furniture® Fiberglass Demi Table",
                  "Case Study Furniture® Solid Wood Daybed with Arm"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Modish Store",
                "shop_url": "https://www.modishstore.com/",
                "products": [
                  "Kalalou Recycled Wooden Coat Rack With Rustic Hooks",
                  "Safavieh Iris Floor Lamp"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "ModShop",
                "shop_url": "https://modshop1.com/",
                "products": [
                  "Stool"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Monster Children",
                "shop_url": "https://shop.monsterchildren.com/",
                "products": [

                ]
              },
              {
                "shop_id": "",
                "shop_name": "Monument",
                "shop_url": "https://getmonument.com/",
                "products": [
                  "Monument Photo Backup and Organization Device"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Moop Shop",
                "shop_url": "https://www.moopshop.com/",
                "products": [
                  "Backpack no.3 in Grey Wax"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Muir Way",
                "shop_url": "https://muir-way.com/",
                "products": [
                  "Carlsbad Caverns Relief Map"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Mukata Being",
                "shop_url": "https://www.muktabeing.com/",
                "products": [
                  "Stay Woke Yoga Mat",
                  "Bloom Yoga Mat",
                  "Nature Yoga Mat"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "My Buddy Tag",
                "shop_url": "https://mybuddytag.com/",
                "products": [
                  "Buddy Tag bracelet"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "My Three Cats & Co.",
                "shop_url": "https://mythreecats.com/",
                "products": [
                  "Abby Wool Cat Cave"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "MySushiSet.com",
                "shop_url": "https://mysushiset.com/",
                "products": [
                  "Kyoto - Cherry Blossom Sushi Dinner Set for Two"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Nanoleaf",
                "shop_url": "https://nanoleaf.me/",
                "products": [
                  "Nanoleaf Light Panels | Rhythm Edition"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Naturally Devine Wellness",
                "shop_url": "https://www.naturallydevine.com/",
                "products": [
                  "Sweet Serene Oil"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Neu Year",
                "shop_url": "https://www.neuyear.net/",
                "products": [
                  "Sunday Monochrome calendar"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Ode to Clean",
                "shop_url": "https://odetoclean.com/",
                "products": [
                  "The Ode To Clean Kit"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Olander Earthworks",
                "shop_url": "https://www.olanderearthworks.com/",
                "products": [
                  "Desktop Zen Garden - Prismatic Genius Pack"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Henning NYC",
                "shop_url": "https://henningnyc.com/",
                "products": [
                  "Dovetail Shirt",
                  "Bank Pants"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Olive & June",
                "shop_url": "https://oliveandjune.com/",
                "products": [
                  "ECC Nail Polish"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Olivia Garden",
                "shop_url": "https://store.oliviagarden.com/",
                "products": [
                  "Charm Apron Teal"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Omami Mini",
                "shop_url": "https://omamimini.com/",
                "products": [
                  "Play house art blocks"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "On2Pets",
                "shop_url": "https://on2pets.com/",
                "products": [
                  "On2Pets Large Square Luxury Cat Tree"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Only NY",
                "shop_url": "https://onlyny.com/",
                "products": [
                  "Service T-Shirt",
                  "Hudson Twill Pants - Black",
                  "PRO-Keds Royal Lo Plus"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Originative Co.",
                "shop_url": "https://www.originativeco.com/",
                "products": [
                  "Saber 68 Keyboard",
                  "POK3R RGB Keyboard"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Parachute",
                "shop_url": "https://www.parachutehome.com/",
                "products": [
                  "Alpaca Lumbar Pillow"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Pet Krewe",
                "shop_url": "https://petkrewe.com/",
                "products": [
                  "Sesame Street Cookie Monster Cat Toy"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "PetWineShop",
                "shop_url": "https://petwineshop.com/",
                "products": [
                  "Pinot Meow Cat Wine"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Phone Charger & Santizer",
                "shop_url": "https://www.phonesoap.com/",
                "products": [
                  "PhoneSoap 3"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Pixi Beauty",
                "shop_url": "https://www.pixibeauty.com/",
                "products": [
                  "Black Lacquer Lash Primer"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Pocketalk",
                "shop_url": "https://www.pocketalk.net/",
                "products": [
                  "Pocketalk Voice Translator"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Poketo",
                "shop_url": "https://www.poketo.com/",
                "products": [
                  "Bamboo Coasters in Abstract Set"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Poly & Bark",
                "shop_url": "https://www.polyandbark.com/",
                "products": [
                  "Jasper Daybed - Midnight Blue",
                  "Tangier Distressed Area Rug",
                  "La Fleur Distressed Medallion Area Rug",
                  "Zeno Globe 2-Light Wall Sconce",
                  "Retro Hylight Desk Lamp",
                  "Draper Office Chair",
                  "Rocker Lounge Chair",
                  "Signy Drum Accent Table with Marble Top - Antique Brass"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Pop It Pal",
                "shop_url": "https://popitpal.com/",
                "products": [
                  {
                    "Pop It Pal® Glitter Edition": "Pimple Popping Toy With Refillable Glitter Pus"
                  }
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Puzzle Twist",
                "shop_url": "https://www.puzzletwist.com/",
                "products": [
                  "Colorful Cats puzzle"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Queen Majesty Hot Sauce",
                "shop_url": "queenmajestyhotsauce.com",
                "products": [
                  "Queen Majesty Hot Sauce Trinity"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Retro Radio Farm",
                "shop_url": "https://www.retroradiofarm.com/",
                "products": [
                  "Gumby Green 1950s Airline AM Tube Radio"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Riverwood Acoustics",
                "shop_url": "https://www.riverwoodacoustics.com/",
                "products": [
                  "The Hudson Premium Wood Bluetooth Speaker"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "RockerMama",
                "shop_url": "https://rockermama.com/",
                "products": [
                  "Classic Ready Rocker"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Ruppert Garden Tools",
                "shop_url": "https://ruppertgardentools.com/",
                "products": [
                  "The Weed Snatcher",
                  "The Dirt Snatcher"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Saflon",
                "shop_url": "https://saflon.us/",
                "products": [
                  "Stainless Steel 14 Piece Cookware Set"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Scandiborn",
                "shop_url": "https://www.scandiborn.com/",
                "products": [
                  "Cam Cam Elephant Soft Toy"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Scenario Home",
                "shop_url": "https://www.scenariohome.com/",
                "products": [
                  "Malacca Round Back Arm Chair",
                  "Arteriors Seth Side Table",
                  "Regina Andrew Blue Ceramic Table Lamp With Linen Shade",
                  "Regina Andrew Concrete Hex Column Table Lamp",
                  "Regina Andew Hand Shaped Ceramic Table Lamp With Linen Shade",
                  "Worlds Away Lucite Stool With Fur Cushion",
                  "Regina Andrew Geometric Alabaster Uplight"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Schoolhouse",
                "shop_url": "https://www.schoolhouse.com/",
                "products": [
                  "Schoolhouse Extendable Table"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Schoolhouse Woodcrafts",
                "shop_url": "https://schoolhousewoodcrafts.com/",
                "products": [
                  "White birch decorative birdhouse"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Shay + Dash",
                "shop_url": "https://www.shayanddash.com/",
                "products": [
                  "Rust Dainty Floral Scrunchie"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "SkateTrainer",
                "shop_url": "https://www.skatertrainer.com/",
                "products": [
                  "SkaterTrainer 2.0’s"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Soludos",
                "shop_url": "https://www.soludos.com/",
                "products": [
                  "Ashore Sneaker"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Spike Brewing",
                "shop_url": "https://spikebrewing.com/",
                "products": [
                  "Spike Plus Kettle"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Spinster Records",
                "shop_url": "https://www.spinsterrecords.com/",
                "products": [
                  "T1 Phono SB Turntable - Walnut"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "St. Frank",
                "shop_url": "https://stfrank.com/",
                "products": [
                  "Havana",
                  "In the Spirit of Bali",
                  "Visionary Women",
                  "Roma",
                  "Teak Tree Root Bowl"
                ]
              }
            ]
          },
          {
            "section_id": 1,
            "layout": "right",
            "label": "",
            "media": {

            },
            "merchants": [
              {
                "shop_id": "",
                "shop_name": "Studio Neat",
                "shop_url": "https://www.studioneat.com/",
                "products": [
                  "Mark One Pen"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Swallowtail",
                "shop_url": "www.swallowtailtea.com",
                "products": [
                  "Bright Morning Stars Mental Clarity Blend"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "The Baby Buddy",
                "shop_url": "https://thebabybuddy.ca/",
                "products": [
                  "Nursing Pillow - SuperSoft Teal Bubble"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "The Citizenry",
                "shop_url": "https://www.the-citizenry.com/",
                "products": [
                  "Palermo Tripolina Camp Stool",
                  "Palermo Chair - Black & Grey Cowhide",
                  "Parthiv Chunky Jute Rug"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "The Henna Guys",
                "shop_url": "https://thehennaguys.com",
                "products": [
                  "Deep Red Henna Hair Dye"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "The Sill",
                "shop_url": "https://www.thesill.com/",
                "products": [
                  "Various Live Plants",
                  "Organic Potting Mix",
                  "Ask Me About My Plants tote bag",
                  "Coffee, Cats and Plants T-Shirt",
                  "Proud Plant Parent Tee"
                ],

              },
              {
                "shop_id": "",
                "shop_name": "The Wing",
                "shop_url": "https://shop.the-wing.com/",
                "products": [
                  "Thankful For Myself Coasters"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "The Wooden States",
                "shop_url": "https://www.thewoodenstates.com/",
                "products": [
                  "New York Magnetic Key Holder"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Time In Color",
                "shop_url": "https://timeincolor.com/",
                "products": [
                  "Today clock"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Tuliptable",
                "shop_url": "https://tuliptable.com/",
                "products": [
                  "Bianca Neve Calacatta Quartz© Tulip Dining Table - Oval"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Turntable Lab",
                "shop_url": "https://www.turntablelab.com/",
                "products": [
                  "T1 Phono SB Turntable"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Two Wheel Gear",
                "shop_url": "https://www.twowheelgear.com/",
                "products": [
                  "Mini Messenger Handlebar Bag"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Unique Corals",
                "shop_url": "https://uniquecorals.com/",
                "products": [
                  "Fish Tank"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Vessi",
                "shop_url": "https://vessifootwear.com/",
                "products": [
                  "Women\"s Cityscape",
                  "Men\"s Everday"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Vineyard Fresh",
                "shop_url": "https://www.vineyardfresh.com/",
                "products": [
                  "Wine Preserver"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Wallshoppe",
                "shop_url": "https://www.wallshoppe.com/",
                "products": [
                  "Palm Shuffle Wallpaper"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Walnut Studio",
                "shop_url": "https://walnutstudiolo.com/",
                "products": [
                  "Leather Cabinet Handle - The Lovejoy"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Warphole Bags",
                "shop_url": "https://warpholebags.com/",
                "products": [
                  "Black Game Time Logo Cap"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Who Gives A Crap",
                "shop_url": "https://au.whogivesacrap.org/",
                "products": [
                  "Forest friendly tissues"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Whoa Nelli",
                "shop_url": "https://www.whoanelli.com/",
                "products": [
                  "Natural Household Cleaners"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Wild Minimalist",
                "shop_url": "https://wildminimalist.com/",
                "products": [
                  "Stainless Steel Lunchbox",
                  "Kid\"s Insulated Stainless Steel Bottle",
                  "Wood Dish Brush"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Will Leather Goods",
                "shop_url": "https://willleathergoods.com/",
                "products": [
                  "Reversible coaster set"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Woody’s Home Brew",
                "shop_url": "https://woodyshomebrew.com/",
                "products": [
                  "Brewbuilt Afterburner"
                ],
                "image": { "url": "https://source.unsplash.com/1600x900/?technology", "alt": "test content" }
              },
              {
                "shop_id": "",
                "shop_name": "Yo Sox",
                "shop_url": "https://www.yo-sox.com/",
                "products": [
                  "Socks"
                ]
              },
              {
                "shop_id": "",
                "shop_name": "Yoga Vida",
                "shop_url": "https://yogavida.com",
                "products": [
                  "Yoga Vida Water Bottle, white"
                ]
              }
            ]
          }
        ]
      }
    ]);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
