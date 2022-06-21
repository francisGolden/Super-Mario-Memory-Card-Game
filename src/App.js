import Header from "./components/Header";
import MarioGrid from "./components/MarioGrid";
import {useState, useEffect} from "react";

const App = () => {
  
  const [grid, setGrid] = useState([
    {src: "/img/classic.png", name: "Classic", clicks: 0, id:0},
    {src: "/img/bee.png", name: "Bee", clicks: 0, id:1},
    {src: "/img/boomerang.png", name: "Boomerang", clicks: 0, id:2},
    {src: "/img/cape.png", name: "Cape", clicks: 0, id:3},
    {src: "/img/cat.png", name: "Cat", clicks: 0, id:4},
    {src: "/img/mega.png", name: "Mega", clicks: 0, id:5},
    {src: "/img/fire.png", name: "Fire", clicks: 0, id:6},
    {src: "/img/penguin.png", name: "Penguin", clicks: 0, id:7},
    {src: "/img/squirrel.png", name: "Squirrel", clicks: 0, id:8},
    {src: "/img/tanooki.png", name: "Tanooki", clicks: 0, id:9},
    {src: "/img/white-tanooki.png", name: "White Tanooki", clicks: 0, id:10},
    {src: "/img/wing.png", name: "Wing", clicks: 0, id:11}
  ]);
  
  let shuffledGrid = grid;
  
  const [color, setColor] = useState("black");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState([0]);

  
  const handleClick = (e) => {
    shuffledGrid.forEach((card)=>{
      // eslint-disable-next-line eqeqeq
      if (e.target.id == card.id){
        setScore(score+1)
        card.clicks += 1
      // eslint-disable-next-line eqeqeq
      };
      // eslint-disable-next-line eqeqeq
      if(e.target.id == card.id && card.clicks > 1){
        
        setBestScore(
          bestScore.concat(score)
        )

        alert(`You scored ${score} point(s). Try again ;D`)
        shuffledGrid.forEach((card)=>{
          card.clicks = 0;
        })

        setScore(0)
      }
    });    
  };

  useEffect(()=>{
    const changeColor = () => {
      if (color === "black"){
        setColor("blue")
      } else if (color === "blue"){
        setColor("black")
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("click", changeColor);
    
    return (()=>{
      document.removeEventListener("click", changeColor);
      document.removeEventListener("click", handleClick);
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, grid]);

  const shuffle = () => {
    shuffledGrid.sort(function(a, b){return 0.5 - Math.random()});
  };

  

  return (
    <div id="container">
      <Header score={score} bestScore={bestScore} />
      <MarioGrid grid={grid} shuffle={shuffle}/>
    </div>
  );
}

export default App;
