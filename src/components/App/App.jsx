import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './Header'



import GalleryList from './GalleryList';
function App() {
  return (
    <div>
      <Header />

      <p>The gallery goes here!</p>
      <GalleryList />
      {/* <LikesButton /> */}
      {/* <img src="images/goat_small.jpg"/> */}
    </div>
  );
}

export default App;

// const [toggle, setToggle] = useState(false);
// const switchText = () => {
//   // if (toggle === true) {
//   //   return 'Turn Off';
//   // } else {
//   //   return 'Turn On';
//   // } refactor to use a ternary operator
//   //       if     do this  else  do this
//   return toggle ? 'Turn Off' : 'Turn On';
// };
// return (
//   <div>
//     <header>
//       <h1>Smallest Countries!</h1>
//     </header>
//     <button onClick={() => setToggle(!toggle)}>{switchText()}</button>
//     <div>{`${toggle}`}</div>
//     <form onSubmit={addCountry}>
//       <input
//         type="text"
//         required
//         placeholder="country name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         required
//         placeholder="continent"
//         value={continent}
//         onChange={(e) => setContinent(e.target.value)}
//       />
//       <input type="submit" value="Submit" />
//     </form>
