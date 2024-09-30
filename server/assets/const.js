const movies = [
  {
    title: "Tumbbad",
    genre: "Fantasy/Horror/Period",
    rating: 8.4,
    votes: "105K",
    description:
      "A man seeks a hidden treasure in the village of Tumbbad, where an ancient curse looms.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICAxMDUuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00079092-wzzsfeaaxh-portrait.jpg",
  },

  {
    title: "Joker: Folie a Deux",
    genre: "Drama/Suspense/Thriller",
    rating: 8.5,
    votes: "91K",
    description:
      "A deep dive into the psyche of the iconic villain, Joker, and his relationship with Harley Quinn.",
    image: {
      title: "Devara - Part 1",
      genre: "Action/Drama/Thriller",
      rating: 8.3,
      vote: "113.2K",
      description:
        "An epic story of a man’s fight against a corrupt system in the backdrop of a war-torn country.",
      image:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAxMjAuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310216-tluebxpafx-portrait.jpg",
    },
  },
  {
    title: "Meiyazhagan",
    genre: "Comedy/Drama",
    rating: 8.0,
    votes: "4.7K",
    description:
      "A light-hearted story about friendship, love, and the journey of self-discovery.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00405427-jtaxncpkny-portrait.jpg",
  },
  {
    title: "Ibbani Tabbida Ileyali",
    genre: "Drama/Musical/Romantic",
    rating: 8.6,
    votes: "6.2K",
    description:
      "A romantic tale of two souls brought together by fate, filled with music and emotions.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA2LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00348158-bxxthefgex-portrait.jpg",
  },
  {
    title: "Stee 2:Sarkate ka Aatank",
    genre: "Action/Sci-Fi/Thriller",
    rating: 8.8,
    votes: "2.1M",
    description:
      "A skilled thief is given a chance to have his criminal history erased, if he can infiltrate a target's dreams.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA0MDEuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-gysqjkrwnv-portrait.jpg",
  },
  {
    title: "Hitler",
    genre: "Drama",
    rating: 9.3,
    votes: "2.8M",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00413125-pjrkctwmnz-portrait.jpg",
  },
  {
    title: "Petta Rap",
    genre: "Drama/Thriller",
    rating: 8.6,
    votes: "1.5M",
    description:
      "A poor family schemes to become employed by a wealthy family, leading to an unexpected encounter.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICA1MzggVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00410110-lasdudgfxg-portrait.jpg",
  },
  {
    title: "Lubber Pandhu",
    genre: "Adventure/Drama/Sci-Fi",
    rating: 8.6,
    votes: "1.6M",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS41LzEwICAyMi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00409924-fhqlnmfgyt-portrait.jpg",
  },
  {
    title: "Binny and Family",
    genre: "Drama/Romance",
    rating: 8.8,
    votes: "1.8M",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICA2LjhLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396243-vxmsalhfbq-portrait.jpg",
  },
];

export const getMovie = (req, res) => {
  res.json(movies);
};
