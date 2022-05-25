const deck = [
  {
    cardName: 'W',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'W',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'W',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'W',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'D4W',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: 'D4W',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: 'D4W',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: 'D4W',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: '_R',
    cardColor: 'red',
    cardAction: 'reverse',
    cardImg: require('./imgs/R-Reverse.png'),
  },
  {
    cardName: '_B',
    cardColor: 'blue',
    cardAction: 'reverse',
    cardImg: require('./imgs/B-Reverse.png'),
  },
  {
    cardName: '_Y',
    cardColor: 'yellow',
    cardAction: 'reverse',
    cardImg: require('./imgs/Y-Reverse.png'),
  },
  {
    cardName: '_G',
    cardColor: 'green',
    cardAction: 'reverse',
    cardImg: require('./imgs/G-Reverse.png'),
  },
  {
    cardName: 'skipR',
    cardColor: 'red',
    cardAction: 'skip',
    cardImg: require('./imgs/R-Skip.png'),
  },
  {
    cardName: 'skipB',
    cardColor: 'blue',
    cardAction: 'skip',
    cardImg: require('./imgs/B-Skip.png'),
  },
  {
    cardName: 'skipY',
    cardColor: 'yellow',
    cardAction: 'color change',
    cardImg: require('./imgs/Y-Skip.png'),
  },
  {
    cardName: 'skipG',
    cardColor: 'wild',
    cardAction: 'color change',
    cardImg: require('./imgs/G-Skip.png'),
  },
  {
    cardName: 'D2R',
    cardColor: 'red',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/R+2.png'),
  },
  {
    cardName: 'D2B',
    cardColor: 'blue',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/B+2.png'),
  },
  {
    cardName: 'D2Y',
    cardColor: 'yellow',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/Y+2.png'),
  },
  {
    cardName: 'D2G',
    cardColor: 'green',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/G+2.png'),
  },
  {
    cardName: '_R',
    cardColor: 'red',
    cardAction: 'reverse',
    cardImg: require('./imgs/R-Reverse.png'),
  },
  {
    cardName: '_B',
    cardColor: 'blue',
    cardAction: 'reverse',
    cardImg: require('./imgs/B-Reverse.png'),
  },
  {
    cardName: '_Y',
    cardColor: 'yellow',
    cardAction: 'reverse',
    cardImg: require('./imgs/Y-Reverse.png'),
  },
  {
    cardName: '_G',
    cardColor: 'green',
    cardAction: 'reverse',
    cardImg: require('./imgs/G-Reverse.png'),
  },
  {
    cardName: 'skipR',
    cardColor: 'red',
    cardAction: 'skip',
    cardImg: require('./imgs/R-Skip.png'),
  },
  {
    cardName: 'skipB',
    cardColor: 'blue',
    cardAction: 'skip',
    cardImg: require('./imgs/B-Skip.png'),
  },
  {
    cardName: 'skipY',
    cardColor: 'yellow',
    cardAction: 'color change',
    cardImg: require('./imgs/Y-Skip.png'),
  },
  {
    cardName: 'skipG',
    cardColor: 'wild',
    cardAction: 'color change',
    cardImg: require('./imgs/G-Skip.png'),
  },
  {
    cardName: 'D2R',
    cardColor: 'red',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/R+2.png'),
  },
  {
    cardName: 'D2B',
    cardColor: 'blue',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/B+2.png'),
  },
  {
    cardName: 'D2Y',
    cardColor: 'yellow',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/Y+2.png'),
  },
  {
    cardName: 'D2G',
    cardColor: 'green',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/G+2.png'),
  },

  // blue cards

  {
    cardName: '0B',
    cardColor: 'blue',
    cardNumber: 0,
    cardImg: require('./imgs/B-0.png'),
  },
  {
    cardName: '1B',
    cardColor: 'blue',
    cardNumber: 1,
    cardImg: require('./imgs/B-1.png'),
  },

  {
    cardName: '2B',
    cardColor: 'blue',
    cardNumber: 2,
    cardImg: require('./imgs/B-2.png'),
  },
  {
    cardName: '3B',
    cardColor: 'blue',
    cardNumber: 3,
    cardImg: require('./imgs/B-3.png'),
  },
  {
    cardName: '4B',
    cardColor: 'blue',
    cardNumber: 4,
    cardImg: require('./imgs/B-4.png'),
  },
  {
    cardName: '5B',
    cardColor: 'blue',
    cardNumber: 5,
    cardImg: require('./imgs/B-5.png'),
  },
  {
    cardName: '6B',
    cardColor: 'blue',
    cardNumber: 6,
    cardImg: require('./imgs/B-6.png'),
  },
  {
    cardName: '7B',
    cardColor: 'blue',
    cardNumber: 7,
    cardImg: require('./imgs/B-7.png'),
  },
  {
    cardName: '8B',
    cardColor: 'blue',
    cardNumber: 8,
    cardImg: require('./imgs/B-8.png'),
  },
  {
    cardName: '9B',
    cardColor: 'blue',
    cardNumber: 9,
    cardImg: require('./imgs/B-9.png'),
  },

  // blue duplicates

  {
    cardName: '1B',
    cardColor: 'blue',
    cardNumber: 1,
    cardImg: require('./imgs/B-1.png'),
  },

  {
    cardName: '2B',
    cardColor: 'blue',
    cardNumber: 2,
    cardImg: require('./imgs/B-2.png'),
  },
  {
    cardName: '3B',
    cardColor: 'blue',
    cardNumber: 3,
    cardImg: require('./imgs/B-3.png'),
  },
  {
    cardName: '4B',
    cardColor: 'blue',
    cardNumber: 4,
    cardImg: require('./imgs/B-4.png'),
  },
  {
    cardName: '5B',
    cardColor: 'blue',
    cardNumber: 5,
    cardImg: require('./imgs/B-5.png'),
  },
  {
    cardName: '6B',
    cardColor: 'blue',
    cardNumber: 6,
    cardImg: require('./imgs/B-6.png'),
  },
  {
    cardName: '7B',
    cardColor: 'blue',
    cardNumber: 7,
    cardImg: require('./imgs/B-7.png'),
  },
  {
    cardName: '8B',
    cardColor: 'blue',
    cardNumber: 8,
    cardImg: require('./imgs/B-8.png'),
  },
  {
    cardName: '9B',
    cardColor: 'blue',
    cardNumber: 9,
    cardImg: require('./imgs/B-9.png'),
  },

  // green cards

  {
    cardName: '0G',
    cardColor: 'green',
    cardNumber: 0,
    cardImg: require('./imgs/G-0.png'),
  },
  {
    cardName: '1G',
    cardColor: 'green',
    cardNumber: 1,
    cardImg: require('./imgs/G-1.png'),
  },
  {
    cardName: '2G',
    cardColor: 'green',
    cardNumber: 2,
    cardImg: require('./imgs/G-2.png'),
  },
  {
    cardName: '3G',
    cardColor: 'green',
    cardNumber: 3,
    cardImg: require('./imgs/G-3.png'),
  },
  {
    cardName: '4G',
    cardColor: 'green',
    cardNumber: 4,
    cardImg: require('./imgs/G-4.png'),
  },
  {
    cardName: '5G',
    cardColor: 'green',
    cardNumber: 5,
    cardImg: require('./imgs/G-5.png'),
  },
  {
    cardName: '6G',
    cardColor: 'green',
    cardNumber: 6,
    cardImg: require('./imgs/G-6.png'),
  },
  {
    cardName: '7G',
    cardColor: 'green',
    cardNumber: 7,
    cardImg: require('./imgs/G-7.png'),
  },
  {
    cardName: '8G',
    cardColor: 'green',
    cardNumber: 8,
    cardImg: require('./imgs/G-8.png'),
  },
  {
    cardName: '9G',
    cardColor: 'green',
    cardNumber: 9,
    cardImg: require('./imgs/G-9.png'),
  },

  // green duplicates

  {
    cardName: '1G',
    cardColor: 'green',
    cardNumber: 1,
    cardImg: require('./imgs/G-1.png'),
  },

  {
    cardName: '2G',
    cardColor: 'green',
    cardNumber: 2,
    cardImg: require('./imgs/G-2.png'),
  },
  {
    cardName: '3G',
    cardColor: 'green',
    cardNumber: 3,
    cardImg: require('./imgs/G-3.png'),
  },
  {
    cardName: '4G',
    cardColor: 'green',
    cardNumber: 4,
    cardImg: require('./imgs/G-4.png'),
  },
  {
    cardName: '5G',
    cardColor: 'green',
    cardNumber: 5,
    cardImg: require('./imgs/G-5.png'),
  },
  {
    cardName: '6G',
    cardColor: 'green',
    cardNumber: 6,
    cardImg: require('./imgs/G-6.png'),
  },
  {
    cardName: '7G',
    cardColor: 'green',
    cardNumber: 7,
    cardImg: require('./imgs/G-7.png'),
  },
  {
    cardName: '8G',
    cardColor: 'green',
    cardNumber: 8,
    cardImg: require('./imgs/G-8.png'),
  },
  {
    cardName: '9G',
    cardColor: 'green',
    cardNumber: 9,
    cardImg: require('./imgs/G-9.png'),
  },

  // red cards

  {
    cardName: '0R',
    cardColor: 'red',
    cardNumber: 0,
    cardImg: require('./imgs/R-0.png'),
  },
  {
    cardName: '1R',
    cardColor: 'red',
    cardNumber: 1,
    cardImg: require('./imgs/R-1.png'),
  },

  {
    cardName: '2R',
    cardColor: 'red',
    cardNumber: 2,
    cardImg: require('./imgs/R-2.png'),
  },
  {
    cardName: '3R',
    cardColor: 'red',
    cardNumber: 3,
    cardImg: require('./imgs/R-3.png'),
  },
  {
    cardName: '4R',
    cardColor: 'red',
    cardNumber: 4,
    cardImg: require('./imgs/R-4.png'),
  },
  {
    cardName: '5R',
    cardColor: 'red',
    cardNumber: 5,
    cardImg: require('./imgs/R-5.png'),
  },
  {
    cardName: '6R',
    cardColor: 'red',
    cardNumber: 6,
    cardImg: require('./imgs/R-6.png'),
  },
  {
    cardName: '7R',
    cardColor: 'red',
    cardNumber: 7,
    cardImg: require('./imgs/R-7.png'),
  },
  {
    cardName: '8R',
    cardColor: 'red',
    cardNumber: 8,
    cardImg: require('./imgs/R-8.png'),
  },
  {
    cardName: '9R',
    cardColor: 'red',
    cardNumber: 9,
    cardImg: require('./imgs/R-9.png'),
  },

  // red duplicates

  {
    cardName: '1R',
    cardColor: 'red',
    cardNumber: 1,
    cardImg: require('./imgs/R-1.png'),
  },

  {
    cardName: '2R',
    cardColor: 'red',
    cardNumber: 2,
    cardImg: require('./imgs/R-2.png'),
  },
  {
    cardName: '3R',
    cardColor: 'red',
    cardNumber: 3,
    cardImg: require('./imgs/R-3.png'),
  },
  {
    cardName: '4R',
    cardColor: 'red',
    cardNumber: 4,
    cardImg: require('./imgs/R-4.png'),
  },
  {
    cardName: '5R',
    cardColor: 'red',
    cardNumber: 5,
    cardImg: require('./imgs/R-5.png'),
  },
  {
    cardName: '6R',
    cardColor: 'red',
    cardNumber: 6,
    cardImg: require('./imgs/R-6.png'),
  },
  {
    cardName: '7R',
    cardColor: 'red',
    cardNumber: 7,
    cardImg: require('./imgs/R-7.png'),
  },
  {
    cardName: '8R',
    cardColor: 'red',
    cardNumber: 8,
    cardImg: require('./imgs/R-8.png'),
  },
  {
    cardName: '9R',
    cardColor: 'red',
    cardNumber: 9,
    cardImg: require('./imgs/R-9.png'),
  },

  // yellow cards

  {
    cardName: '0Y',
    cardColor: 'yellow',
    cardNumber: 0,
    cardImg: require('./imgs/Y-0.png'),
  },
  {
    cardName: '1Y',
    cardColor: 'yellow',
    cardNumber: 1,
    cardImg: require('./imgs/Y-1.png'),
  },

  {
    cardName: '2Y',
    cardColor: 'yellow',
    cardNumber: 2,
    cardImg: require('./imgs/Y-2.png'),
  },
  {
    cardName: '3Y',
    cardColor: 'yellow',
    cardNumber: 3,
    cardImg: require('./imgs/Y-3.png'),
  },
  {
    cardName: '4Y',
    cardColor: 'yellow',
    cardNumber: 4,
    cardImg: require('./imgs/Y-4.png'),
  },
  {
    cardName: '5Y',
    cardColor: 'yellow',
    cardNumber: 5,
    cardImg: require('./imgs/Y-5.png'),
  },
  {
    cardName: '6Y',
    cardColor: 'yellow',
    cardNumber: 6,
    cardImg: require('./imgs/Y-6.png'),
  },
  {
    cardName: '7Y',
    cardColor: 'yellow',
    cardNumber: 7,
    cardImg: require('./imgs/Y-7.png'),
  },
  {
    cardName: '8Y',
    cardColor: 'yellow',
    cardNumber: 8,
    cardImg: require('./imgs/Y-8.png'),
  },
  {
    cardName: '9Y',
    cardColor: 'yellow',
    cardNumber: 9,
    cardImg: require('./imgs/Y-9.png'),
  },

  // yellow duplicates

  {
    cardName: '1Y',
    cardColor: 'yellow',
    cardNumber: 1,
    cardImg: require('./imgs/Y-1.png'),
  },

  {
    cardName: '2Y',
    cardColor: 'yellow',
    cardNumber: 2,
    cardImg: require('./imgs/Y-2.png'),
  },
  {
    cardName: '3Y',
    cardColor: 'yellow',
    cardNumber: 3,
    cardImg: require('./imgs/Y-3.png'),
  },
  {
    cardName: '4Y',
    cardColor: 'yellow',
    cardNumber: 4,
    cardImg: require('./imgs/Y-4.png'),
  },
  {
    cardName: '5Y',
    cardColor: 'yellow',
    cardNumber: 5,
    cardImg: require('./imgs/Y-5.png'),
  },
  {
    cardName: '6Y',
    cardColor: 'yellow',
    cardNumber: 6,
    cardImg: require('./imgs/Y-6.png'),
  },
  {
    cardName: '7Y',
    cardColor: 'yellow',
    cardNumber: 7,
    cardImg: require('./imgs/Y-7.png'),
  },
  {
    cardName: '8Y',
    cardColor: 'yellow',
    cardNumber: 8,
    cardImg: require('./imgs/Y-8.png'),
  },
  {
    cardName: '9Y',
    cardColor: 'yellow',
    cardNumber: 9,
    cardImg: require('./imgs/Y-9.png'),
  },
]

export default deck
