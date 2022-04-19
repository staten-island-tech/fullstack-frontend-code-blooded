const allCards = [
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card duplicate 1',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card duplicate 2',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card duplicate 3',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: ' +4 Wild Card',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: ' +4 Wild Card duplicate 1',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: ' +4 Wild Card duplicate 2',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: ' +4 Wild Card duplicate 3',
    cardColor: 'wild',
    cardAction: 'plus4colorChange',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/plus4WildCard.png'),
  },
  {
    cardName: 'Red Reverse Card',
    cardColor: 'red',
    cardAction: 'reverse',
    cardImg: require('./imgs/R-Reverse.png'),
  },
  {
    cardName: 'Blue Reverse Card',
    cardColor: 'blue',
    cardAction: 'reverse',
    cardImg: require('./imgs/B-Reverse.png'),
  },
  {
    cardName: 'Yellow Reverse Card',
    cardColor: 'yellow',
    cardAction: 'reverse',
    cardImg: require('./imgs/Y-Reverse.png'),
  },
  {
    cardName: 'Green Reverse Card',
    cardColor: 'green',
    cardAction: 'reverse',
    cardImg: require('./imgs/G-Reverse.png'),
  },
  {
    cardName: 'Red Skip Card',
    cardColor: 'red',
    cardAction: 'skip',
    cardImg: require('./imgs/R-Skip.png'),
  },
  {
    cardName: 'Blue Skip Card',
    cardColor: 'blue',
    cardAction: 'skip',
    cardImg: require('./imgs/B-Skip.png'),
  },
  {
    cardName: 'Yellow Skip Card',
    cardColor: 'yellow',
    cardAction: 'color change',
    cardImg: require('./imgs/Y-Skip.png'),
  },
  {
    cardName: 'Green Skip Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardImg: require('./imgs/G-Skip.png'),
  },
  {
    cardName: 'Red +2 Card',
    cardColor: 'red',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/R+2.png'),
  },
  {
    cardName: 'Blue +2 Card',
    cardColor: 'blue',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/B+2.png'),
  },
  {
    cardName: 'Yellow +2 Card',
    cardColor: 'yellow',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/Y+2.png'),
  },
  {
    cardName: 'Green +2 Card',
    cardColor: 'green',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/G+2.png'),
  },
  {
    cardName: 'Red Reverse Card duplicate',
    cardColor: 'red',
    cardAction: 'reverse',
    cardImg: require('./imgs/R-Reverse.png'),
  },
  {
    cardName: 'Blue Reverse Card duplicate',
    cardColor: 'blue',
    cardAction: 'reverse',
    cardImg: require('./imgs/B-Reverse.png'),
  },
  {
    cardName: 'Yellow Reverse Card duplicate',
    cardColor: 'yellow',
    cardAction: 'reverse',
    cardImg: require('./imgs/Y-Reverse.png'),
  },
  {
    cardName: 'Green Reverse Card duplicate',
    cardColor: 'green',
    cardAction: 'reverse',
    cardImg: require('./imgs/G-Reverse.png'),
  },
  {
    cardName: 'Red Skip Card duplicate',
    cardColor: 'red',
    cardAction: 'skip',
    cardImg: require('./imgs/R-Skip.png'),
  },
  {
    cardName: 'Blue Skip Card duplicate',
    cardColor: 'blue',
    cardAction: 'skip',
    cardImg: require('./imgs/B-Skip.png'),
  },
  {
    cardName: 'Yellow Skip Card duplicate',
    cardColor: 'yellow',
    cardAction: 'color change',
    cardImg: require('./imgs/Y-Skip.png'),
  },
  {
    cardName: 'Green Skip Card duplicate',
    cardColor: 'wild',
    cardAction: 'color change',
    cardImg: require('./imgs/G-Skip.png'),
  },
  {
    cardName: 'Red +2 Card duplicate',
    cardColor: 'red',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/R+2.png'),
  },
  {
    cardName: 'Blue +2 Card duplicate',
    cardColor: 'blue',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/B+2.png'),
  },
  {
    cardName: 'Yellow +2 Card duplicate',
    cardColor: 'yellow',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/Y+2.png'),
  },
  {
    cardName: 'Green +2 Card duplicate',
    cardColor: 'green',
    cardAction: 'plusTwo',
    cardImg: require('./imgs/G+2.png'),
  },

  // blue cards

  {
    cardName: 'Blue Zero Card',
    cardColor: 'blue',
    cardNumber: 0,
    cardImg: require('./imgs/B-0.png'),
  },
  {
    cardName: 'Blue One Card',
    cardColor: 'blue',
    cardNumber: 1,
    cardImg: require('./imgs/B-1.png'),
  },

  {
    cardName: 'Blue Two Card',
    cardColor: 'blue',
    cardNumber: 2,
    cardImg: require('./imgs/B-2.png'),
  },
  {
    cardName: 'Blue Three Card',
    cardColor: 'blue',
    cardNumber: 3,
    cardImg: require('./imgs/B-3.png'),
  },
  {
    cardName: 'Blue Four Card',
    cardColor: 'blue',
    cardNumber: 4,
    cardImg: require('./imgs/B-4.png'),
  },
  {
    cardName: 'Blue Five Card',
    cardColor: 'blue',
    cardNumber: 5,
    cardImg: require('./imgs/B-5.png'),
  },
  {
    cardName: 'Blue Six Card',
    cardColor: 'blue',
    cardNumber: 6,
    cardImg: require('./imgs/B-6.png'),
  },
  {
    cardName: 'Blue Seven Card',
    cardColor: 'blue',
    cardNumber: 7,
    cardImg: require('./imgs/B-7.png'),
  },
  {
    cardName: 'Blue Eight Card',
    cardColor: 'blue',
    cardNumber: 8,
    cardImg: require('./imgs/B-8.png'),
  },
  {
    cardName: 'Blue Nine Card',
    cardColor: 'blue',
    cardNumber: 9,
    cardImg: require('./imgs/B-9.png'),
  },

  // blue duplicates

  {
    cardName: 'Blue One Card duplicate',
    cardColor: 'blue',
    cardNumber: 1,
    cardImg: require('./imgs/B-1.png'),
  },

  {
    cardName: 'Blue Two Card duplicate',
    cardColor: 'blue',
    cardNumber: 2,
    cardImg: require('./imgs/B-2.png'),
  },
  {
    cardName: 'Blue Three Card duplicate',
    cardColor: 'blue',
    cardNumber: 3,
    cardImg: require('./imgs/B-3.png'),
  },
  {
    cardName: 'Blue Four Card duplicate',
    cardColor: 'blue',
    cardNumber: 4,
    cardImg: require('./imgs/B-4.png'),
  },
  {
    cardName: 'Blue Five Card duplicate',
    cardColor: 'blue',
    cardNumber: 5,
    cardImg: require('./imgs/B-5.png'),
  },
  {
    cardName: 'Blue Six Card duplicate',
    cardColor: 'blue',
    cardNumber: 6,
    cardImg: require('./imgs/B-6.png'),
  },
  {
    cardName: 'Blue Seven Card duplicate',
    cardColor: 'blue',
    cardNumber: 7,
    cardImg: require('./imgs/B-7.png'),
  },
  {
    cardName: 'Blue Eight Card duplicate',
    cardColor: 'blue',
    cardNumber: 8,
    cardImg: require('./imgs/B-8.png'),
  },
  {
    cardName: 'Blue Nine Card duplicate',
    cardColor: 'blue',
    cardNumber: 9,
    cardImg: require('./imgs/B-9.png'),
  },

  // green cards

  {
    cardName: 'Green Zero Card',
    cardColor: 'green',
    cardNumber: 0,
    cardImg: require('./imgs/G-0.png'),
  },
  {
    cardName: 'Green One Card',
    cardColor: 'green',
    cardNumber: 1,
    cardImg: require('./imgs/G-1.png'),
  },
  {
    cardName: 'Green Two Card',
    cardColor: 'green',
    cardNumber: 2,
    cardImg: require('./imgs/G-2.png'),
  },
  {
    cardName: 'Green Three Card',
    cardColor: 'green',
    cardNumber: 3,
    cardImg: require('./imgs/G-3.png'),
  },
  {
    cardName: 'Green Four Card',
    cardColor: 'green',
    cardNumber: 4,
    cardImg: require('./imgs/G-4.png'),
  },
  {
    cardName: 'Green Five Card',
    cardColor: 'green',
    cardNumber: 5,
    cardImg: require('./imgs/G-5.png'),
  },
  {
    cardName: 'Green Six Card',
    cardColor: 'green',
    cardNumber: 6,
    cardImg: require('./imgs/G-6.png'),
  },
  {
    cardName: 'Green Seven Card',
    cardColor: 'green',
    cardNumber: 7,
    cardImg: require('./imgs/G-7.png'),
  },
  {
    cardName: 'Green Eight Card',
    cardColor: 'green',
    cardNumber: 8,
    cardImg: require('./imgs/G-8.png'),
  },
  {
    cardName: 'Green Nine Card',
    cardColor: 'green',
    cardNumber: 9,
    cardImg: require('./imgs/G-9.png'),
  },

  // green duplicates

  {
    cardName: 'Green One Card duplicate',
    cardColor: 'green',
    cardNumber: 1,
    cardImg: require('./imgs/G-1.png'),
  },

  {
    cardName: 'Green Two Card duplicate',
    cardColor: 'green',
    cardNumber: 2,
    cardImg: require('./imgs/G-2.png'),
  },
  {
    cardName: 'Green Three Card duplicate',
    cardColor: 'green',
    cardNumber: 3,
    cardImg: require('./imgs/G-3.png'),
  },
  {
    cardName: 'Green Four Card duplicate',
    cardColor: 'green',
    cardNumber: 4,
    cardImg: require('./imgs/G-4.png'),
  },
  {
    cardName: 'Green Five Card duplicate',
    cardColor: 'green',
    cardNumber: 5,
    cardImg: require('./imgs/G-5.png'),
  },
  {
    cardName: 'Green Six Card duplicate',
    cardColor: 'green',
    cardNumber: 6,
    cardImg: require('./imgs/G-6.png'),
  },
  {
    cardName: 'Green Seven Card duplicate',
    cardColor: 'green',
    cardNumber: 7,
    cardImg: require('./imgs/G-7.png'),
  },
  {
    cardName: 'Green Eight Card duplicate',
    cardColor: 'green',
    cardNumber: 8,
    cardImg: require('./imgs/G-8.png'),
  },
  {
    cardName: 'Green Nine Card duplicate',
    cardColor: 'green',
    cardNumber: 9,
    cardImg: require('./imgs/G-9.png'),
  },

  // red cards

  {
    cardName: 'Red Zero Card',
    cardColor: 'red',
    cardNumber: 0,
    cardImg: require('./imgs/R-0.png'),
  },
  {
    cardName: 'Red One Card',
    cardColor: 'red',
    cardNumber: 1,
    cardImg: require('./imgs/R-1.png'),
  },

  {
    cardName: 'Red Two Card',
    cardColor: 'red',
    cardNumber: 2,
    cardImg: require('./imgs/R-2.png'),
  },
  {
    cardName: 'Red Three Card',
    cardColor: 'red',
    cardNumber: 3,
    cardImg: require('./imgs/R-3.png'),
  },
  {
    cardName: 'Red Four Card',
    cardColor: 'red',
    cardNumber: 4,
    cardImg: require('./imgs/R-4.png'),
  },
  {
    cardName: 'Red Five Card',
    cardColor: 'red',
    cardNumber: 5,
    cardImg: require('./imgs/R-5.png'),
  },
  {
    cardName: 'Red Six Card',
    cardColor: 'red',
    cardNumber: 6,
    cardImg: require('./imgs/R-6.png'),
  },
  {
    cardName: 'Red Seven Card',
    cardColor: 'red',
    cardNumber: 7,
    cardImg: require('./imgs/R-7.png'),
  },
  {
    cardName: 'Red Eight Card',
    cardColor: 'red',
    cardNumber: 8,
    cardImg: require('./imgs/R-8.png'),
  },
  {
    cardName: 'Red Nine Card',
    cardColor: 'red',
    cardNumber: 9,
    cardImg: require('./imgs/R-9.png'),
  },

  // red duplicates

  {
    cardName: 'Red One Card',
    cardColor: 'red',
    cardNumber: 1,
    cardImg: require('./imgs/R-1.png'),
  },

  {
    cardName: 'Red Two Card',
    cardColor: 'red',
    cardNumber: 2,
    cardImg: require('./imgs/R-2.png'),
  },
  {
    cardName: 'Red Three Card',
    cardColor: 'red',
    cardNumber: 3,
    cardImg: require('./imgs/R-3.png'),
  },
  {
    cardName: 'Red Four Card',
    cardColor: 'red',
    cardNumber: 4,
    cardImg: require('./imgs/R-4.png'),
  },
  {
    cardName: 'Red Five Card',
    cardColor: 'red',
    cardNumber: 5,
    cardImg: require('./imgs/R-5.png'),
  },
  {
    cardName: 'Red Six Card',
    cardColor: 'red',
    cardNumber: 6,
    cardImg: require('./imgs/R-6.png'),
  },
  {
    cardName: 'Red Seven Card',
    cardColor: 'red',
    cardNumber: 7,
    cardImg: require('./imgs/R-7.png'),
  },
  {
    cardName: 'Red Eight Card',
    cardColor: 'red',
    cardNumber: 8,
    cardImg: require('./imgs/R-8.png'),
  },
  {
    cardName: 'Red Nine Card',
    cardColor: 'red',
    cardNumber: 9,
    cardImg: require('./imgs/R-9.png'),
  },

  // yellow cards

  {
    cardName: 'Yellow Zero Card',
    cardColor: 'yellow',
    cardNumber: 0,
    cardImg: require('./imgs/Y-0.png'),
  },
  {
    cardName: 'Yellow One Card',
    cardColor: 'yellow',
    cardNumber: 1,
    cardImg: require('./imgs/Y-1.png'),
  },

  {
    cardName: 'Yellow Two Card',
    cardColor: 'yellow',
    cardNumber: 2,
    cardImg: require('./imgs/Y-2.png'),
  },
  {
    cardName: 'Yellow Three Card',
    cardColor: 'yellow',
    cardNumber: 3,
    cardImg: require('./imgs/Y-3.png'),
  },
  {
    cardName: 'Yellow Four Card',
    cardColor: 'yellow',
    cardNumber: 4,
    cardImg: require('./imgs/Y-4.png'),
  },
  {
    cardName: 'Yellow Five Card',
    cardColor: 'yellow',
    cardNumber: 5,
    cardImg: require('./imgs/Y-5.png'),
  },
  {
    cardName: 'Yellow Six Card',
    cardColor: 'yellow',
    cardNumber: 6,
    cardImg: require('./imgs/Y-6.png'),
  },
  {
    cardName: 'Yellow Seven Card',
    cardColor: 'yellow',
    cardNumber: 7,
    cardImg: require('./imgs/Y-7.png'),
  },
  {
    cardName: 'Yellow Eight Card',
    cardColor: 'yellow',
    cardNumber: 8,
    cardImg: require('./imgs/Y-8.png'),
  },
  {
    cardName: 'Yellow Nine Card',
    cardColor: 'yellow',
    cardNumber: 9,
    cardImg: require('./imgs/Y-9.png'),
  },

  // yellow duplicates

  {
    cardName: 'Yellow One Card duplicate',
    cardColor: 'yellow',
    cardNumber: 1,
    cardImg: require('./imgs/Y-1.png'),
  },

  {
    cardName: 'Yellow Two Card duplicate',
    cardColor: 'yellow',
    cardNumber: 2,
    cardImg: require('./imgs/Y-2.png'),
  },
  {
    cardName: 'Yellow Three Card duplicate',
    cardColor: 'yellow',
    cardNumber: 3,
    cardImg: require('./imgs/Y-3.png'),
  },
  {
    cardName: 'Yellow Four Card duplicate',
    cardColor: 'yellow',
    cardNumber: 4,
    cardImg: require('./imgs/Y-4.png'),
  },
  {
    cardName: 'Yellow Five Card duplicate',
    cardColor: 'yellow',
    cardNumber: 5,
    cardImg: require('./imgs/Y-5.png'),
  },
  {
    cardName: 'Yellow Six Card duplicate',
    cardColor: 'yellow',
    cardNumber: 6,
    cardImg: require('./imgs/Y-6.png'),
  },
  {
    cardName: 'Yellow Seven Card duplicate',
    cardColor: 'yellow',
    cardNumber: 7,
    cardImg: require('./imgs/Y-7.png'),
  },
  {
    cardName: 'Yellow Eight Card duplicate',
    cardColor: 'yellow',
    cardNumber: 8,
    cardImg: require('./imgs/Y-8.png'),
  },
  {
    cardName: 'Yellow Nine Card duplicate',
    cardColor: 'yellow',
    cardNumber: 9,
    cardImg: require('./imgs/Y-9.png'),
  },
]

export default allCards
