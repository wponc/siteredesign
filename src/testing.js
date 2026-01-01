// export default function HomeScene() {
//   // const words = [
//   // "System. out. println('hello world!')",
//   // '<body><div id="root"></div><script type="module" src="/src/main.jsx"></script></body>',
//   // '"dependencies": {"@react-three/drei": "^9.93.1, "@react-three/fiber": "^8.15.14","react": "^18.2.0" "react-dom": "^18.2.0"}',
//   // "useEffect(() => { const interval = setInterval(() => { setIndex(getRandomNumber())}, 1000); return () =>(interval);}, []);",
//   // 'document.getElementById( "myButton" ).addEventListener( "click", function() { console.log( "Button clicked!" );});',
//   // 'for (let i = 0; i < 5; i++) {console.log(i);}',
//   // '0.00s - Debugger warning: It seems that frozen modules are being used, which may 0.00s - make the debugger miss breakpoints. Please pass -Xfrozen_modules=off 0.00s - to python to disable frozen modules.',
//   // "'date': pl.Series( [ datetime.strptime( currentFile.filename[ currentFile.filename.index('_') + 1 : currentFile.filename.index('_') + 15 ], '%Y%m%d%H%M%S') ] * currentFile[ currentBeam + '/land_segments/latitude/' ].shape[0]),",
//   // "for root, directories, files in os.walk(subfolderDirectory): for name in directories: currentSubdirectory = os.path.join(root, name) extractDirectory(currentSubdirectory)",
//   // "<html>  <head>    <title>Hello</title>  </head>  <body>    <p>Hello, World!</p>  </body> </html>",
//   // " SELECT * FROM memories WHERE emotion = regret ; UPDATE attitude SET hope = hope * 1.5 WHERE category = 'future';",
//   // 'will.limited',
//   // ]
//   const words = [
//     "Hello", // english
//     "hola", // spanish
//     "bonjour", // french
//     "hallo", // limburgish
//     "sveiki atvykę", // Lithuanian
//     "स्वागत", // maithili
//     "лъик вусаравӀйюсарай", // avaric
//     "xoş gəlmisiniz", // azerbaijani
//     "ସ୍ୱାଗତ", // odia
//     "ਸੁਆਗਤ ਹੈ", // punjabi
//     "добро пожаловать", // russian
//     "Fàilte", // scottish gaelic
//     "i dansɛ", // dyula 
//     "vælkomin", // faeroese
//     "jabbama", // fulani 
//     "üdvözlöm", // hungarian
//   ]

//   const darkBackground = '#0C0C0C'
//   const lightBackground = '#F5F5F2'
//   let previousIndex = -1

//   const [index, setIndex] = useState(0)
//   const previousIndexRef = useRef<number>(-1)

//   function getRandomNumber(): number {
//     let randomNumber: number
//     do {
//       randomNumber = Math.floor(Math.random() * words.length)
//     } while (randomNumber === previousIndexRef.current)
//     previousIndexRef.current = randomNumber
//     return randomNumber
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(getRandomNumber())
//     }, 6000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <>
//       <Environment preset="studio" background />
//       <directionalLight intensity={1} />
//       <Text>
//         {words[index]}
//       </Text>
//       <mesh >
//         <boxGeometry />
//       </mesh>
//       <OrbitControls enableZoom/>
//     </>
//   )
// }