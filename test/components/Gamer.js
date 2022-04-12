// import io from 'socket.io-client'

// let socket
// const ENDPOINT = 'http://localhost:3000'
// // const ENDPOINT = 'https://uno-online-multiplayer.herokuapp.com/'
// const Game = (props) => {
//     const data = queryString.parse(props.location.search)

//     //initialize socket state
//     const [room, setRoom] = useState(data.roomCode)
//     const [roomFull, setRoomFull] = useState(false)
//     const [users, setUsers] = useState([])
//     const [currentUser, setCurrentUser] = useState('')
//     const [message, setMessage] = useState('')
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
//         const connectionOptions =  {
//             "forceNew" : true,
//             "reconnectionAttempts": "Infinity", 
//             "timeout" : 10000,                  
//             "transports" : ["websocket"]
//         }
//         socket = io.connect(ENDPOINT, connectionOptions)

//         socket.emit('join', {room: room}, (error) => {
//             if(error)
//                 setRoomFull(true)
//         })

//         //cleanup on component unmount
//         return function cleanup() {
//             socket.emit('disconnect')
//             //shut down connnection instance
//             socket.off()
//         }
//     }, [])

//         //extract the card from that startingCardIndex into the playedCardsPile
//         const playedCardsPile = shuffledCards.splice(startingCardIndex, 1)

//         //store all remaining cards into drawCardPile
//         const drawCardPile = shuffledCards

//         //send initial state to server
//         socket.emit('initGameState', {
//             gameOver: false,
//             turn: 'Player 1',
//             player1Deck: [...player1Deck],
//             player2Deck: [...player2Deck],
//             currentColor: playedCardsPile[0].charAt(1),
//             currentNumber: playedCardsPile[0].charAt(0),
//             playedCardsPile: [...playedCardsPile],
//             drawCardPile: [...drawCardPile]
//         })
//     }, [])

//     useEffect(() => {
//         socket.on('initGameState', ({ gameOver, turn, player1Deck, player2Deck, currentColor, currentNumber, playedCardsPile, drawCardPile }) => {
//             setGameOver(gameOver)
//             setTurn(turn)
//             setPlayer1Deck(player1Deck)
//             setPlayer2Deck(player2Deck)
//             setCurrentColor(currentColor)
//             setCurrentNumber(currentNumber)
//             setPlayedCardsPile(playedCardsPile)
//             setDrawCardPile(drawCardPile)
//         })

//         socket.on('updateGameState', ({ gameOver, winner, turn, player1Deck, player2Deck, currentColor, currentNumber, playedCardsPile, drawCardPile }) => {
//             gameOver && setGameOver(gameOver)
//             gameOver===true && playGameOverSound()
//             winner && setWinner(winner)
//             turn && setTurn(turn)
//             player1Deck && setPlayer1Deck(player1Deck)
//             player2Deck && setPlayer2Deck(player2Deck)
//             currentColor && setCurrentColor(currentColor)
//             currentNumber && setCurrentNumber(currentNumber)
//             playedCardsPile && setPlayedCardsPile(playedCardsPile)
//             drawCardPile && setDrawCardPile(drawCardPile)
//             setUnoButtonPressed(false)
//         })

//         socket.on("roomData", ({ users }) => {
//             setUsers(users)
//         })

//         socket.on('currentUserData', ({ name }) => {
//             setCurrentUser(name)
//         })

//         socket.on('message', message => {
//             setMessages(messages => [ ...messages, message ])

//             const chatBody = document.querySelector('.chat-body')
//             chatBody.scrollTop = chatBody.scrollHeight
//         })
//     }, [])

 
// export default Game