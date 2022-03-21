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
    cardName: ' +4 Wild Card',
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
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
  {
    cardName: 'Wild Card',
    cardColor: 'wild',
    cardAction: 'color change',
    cardNumber: 10,
    // 10 means all numbers. use in if else as an or statement
    cardImg: require('./imgs/WildCard.png'),
  },
]
export default allCards