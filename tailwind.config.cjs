/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "url('https://s3-alpha-sig.figma.com/img/ac7b/4316/55447d05c75fa3f3de352e02b80a7bbf?Expires=1673827200&Signature=UErjj8-2jFA32Q~kAniTO8xzpPegRqpRYY79ce1oem54dA1qBamOmvGgUftLf7aDd8reku-Cwnv0kVvgmSwKHnp14t1rSpI~8cO-XyZXzT6D6zuIWZ57GAGeKKCKpCbs9ilskoCHqkIO5OxkAf6ZHJ9QcScobiDXeFD04XL91jsCtQIzW5HhG3OIzormJy-lWZilcQ0D8ogxWVKLsJdz2AfJSRnzIUjDQCW~mo0GYkz9TPu~G2swP6BsteyTJHxeNiKa8XxlkX2S9-aKccNjHK4bm6eoMzPW06OFoc-IWKA253Y9JLWLZmwh~nSU2x9QrVfaUgzcmmLlc4L5VJKFIQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
    },
  },
  plugins: [require("daisyui")],
};
