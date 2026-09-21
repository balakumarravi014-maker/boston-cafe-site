// Central place for editable business info & content.
// Swap these placeholder values for the client's real details before launch.
// Photos are free-to-use Unsplash images (verified live) standing in for
// real photography of the client's cafe.

function unsplash(id: string, width = 1400) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export const heroImage = unsplash("1583165278997-0250ea5d72e2");
export const storyImage = unsplash("1447933601403-0c6688de566e");
export const ctaImage = unsplash("1572231086568-6984943e6629");
export const aboutHeroImage = unsplash("1572982270699-473dfa34d7e7");
export const reservationsImage = unsplash("1628613526162-a80aae5cc63d");

export const business = {
  name: "Beacon & Bean",
  tagline: "Boston's cozy corner for coffee, pastries & community.",
  address: {
    line1: "128 Newbury Street",
    line2: "Boston, MA 02116",
    mapQuery: "128 Newbury Street, Boston, MA 02116",
  },
  phone: "(617) 555-0142",
  phoneHref: "tel:+16175550142",
  email: "hello@beaconandbean.com",
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 5:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/reservations" },
  { label: "Contact", href: "/contact" },
];

export const featuredMenu = [
  {
    name: "Beacon Latte",
    description: "Double espresso, steamed whole milk, house vanilla bean syrup.",
    price: "$5.25",
    image: unsplash("1593443320739-77f74939d0da"),
  },
  {
    name: "Almond Croissant",
    description: "Butter croissant baked fresh each morning, almond cream filling.",
    price: "$4.50",
    image: unsplash("1534432182912-63863115e106"),
  },
  {
    name: "Harborside Cold Brew",
    description: "18-hour steeped cold brew over ice, splash of oat cream.",
    price: "$4.75",
    image: unsplash("1504753793650-d4a2b783c15e"),
  },
  {
    name: "Avocado Toast",
    description: "Sourdough, smashed avocado, chili flake, soft egg.",
    price: "$9.50",
    image: unsplash("1687276287139-88f7333c8ca4"),
  },
];

export const menu = [
  {
    category: "Coffee & Espresso",
    items: [
      { name: "Drip Coffee", description: "Locally roasted, brewed fresh all day.", price: "$3.25" },
      { name: "Americano", description: "Double espresso, hot water.", price: "$3.75" },
      { name: "Cappuccino", description: "Espresso, steamed milk, deep foam.", price: "$4.50" },
      { name: "Beacon Latte", description: "Espresso, steamed milk, house vanilla bean syrup.", price: "$5.25" },
      { name: "Mocha", description: "Espresso, steamed milk, Belgian dark chocolate.", price: "$5.50" },
      { name: "Harborside Cold Brew", description: "18-hour steeped, served over ice.", price: "$4.75" },
    ],
  },
  {
    category: "Tea & Other Drinks",
    items: [
      { name: "Loose Leaf Tea", description: "Earl grey, chamomile, or jasmine green.", price: "$3.50" },
      { name: "Chai Latte", description: "House-spiced chai, steamed milk.", price: "$4.75" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, steamed milk.", price: "$5.25" },
      { name: "Fresh Squeezed Lemonade", description: "Made in small batches daily.", price: "$3.75" },
    ],
  },
  {
    category: "Pastries & Bakery",
    items: [
      { name: "Almond Croissant", description: "Butter croissant, almond cream filling.", price: "$4.50" },
      { name: "Blueberry Scone", description: "Baked fresh each morning.", price: "$3.75" },
      { name: "Banana Walnut Bread", description: "Sliced thick, toasted on request.", price: "$3.95" },
      { name: "Chocolate Chip Cookie", description: "Sea salt finish, baked in-house.", price: "$3.25" },
    ],
  },
  {
    category: "Breakfast",
    items: [
      { name: "Avocado Toast", description: "Sourdough, smashed avocado, chili flake, soft egg.", price: "$9.50" },
      { name: "Classic Breakfast Sandwich", description: "Egg, cheddar, choice of bacon or sausage.", price: "$7.95" },
      { name: "Overnight Oats", description: "Steel-cut oats, seasonal fruit, honey.", price: "$6.75" },
      { name: "Greek Yogurt Bowl", description: "Granola, mixed berries, local honey.", price: "$6.95" },
    ],
  },
  {
    category: "Lunch & Sandwiches",
    items: [
      { name: "Turkey & Brie Panini", description: "Roasted turkey, brie, cranberry, arugula.", price: "$10.50" },
      { name: "Caprese Panini", description: "Fresh mozzarella, tomato, basil pesto.", price: "$9.95" },
      { name: "Harvest Salad", description: "Mixed greens, roasted squash, feta, candied pecans.", price: "$10.95" },
      { name: "Tomato Basil Soup", description: "Served with a slice of sourdough.", price: "$6.50" },
    ],
  },
];

export const values = [
  {
    title: "Locally Roasted",
    description: "Beans roasted weekly by small-batch Massachusetts roasters.",
  },
  {
    title: "Baked Fresh Daily",
    description: "Our pastry case is restocked every morning before sunrise.",
  },
  {
    title: "Community First",
    description: "Free wifi, cozy seating, and a home for local artists & events.",
  },
  {
    title: "Sustainably Minded",
    description: "Compostable packaging and fair-trade sourcing wherever possible.",
  },
];

export const team = [
  { name: "Drago", role: "Owner & Head Roaster", image: unsplash("1621912512450-6d02139074c7") },
  { name: "James Whitfield", role: "Head Baker", image: unsplash("1515860734122-e0d771b36d3e") },
  { name: "Priya Nair", role: "Cafe Manager", image: unsplash("1595574293242-fa3fc8206791") },
];

export const testimonials = [
  {
    quote: "My favorite spot in Back Bay. The latte art alone is worth the visit, but the pastries keep me coming back.",
    author: "Sarah K.",
  },
  {
    quote: "Cozy, warm, and the staff remember your order. Feels like a neighborhood living room.",
    author: "Daniel R.",
  },
  {
    quote: "Best cold brew in Boston, hands down. Great place to work for a few hours too.",
    author: "Aisha M.",
  },
];

export const galleryImages = [
  { label: "Espresso bar", image: unsplash("1551529563-fce9529e67ac") },
  { label: "Latte art", image: unsplash("1670404161009-29548c027d06") },
  { label: "Fresh pastries", image: unsplash("1711672284661-bd70e38f31b2") },
  { label: "Cafe interior", image: unsplash("1464979681340-bdd28a61699e") },
  { label: "Cold brew", image: unsplash("1561641377-f7456d23aa9b") },
  { label: "Reading corner", image: unsplash("1628613526162-a80aae5cc63d") },
  { label: "Morning bake", image: unsplash("1705972018470-a89eda1c6ce4") },
  { label: "Community table", image: unsplash("1542181961-9590d0c79dab") },
];
