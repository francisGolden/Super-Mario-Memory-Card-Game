const Header = ({bestScore, score}) => {
    return (
        <div id="header">
            <h1>Super Mario Memory Card Game</h1>
            <p>Get points by clicking on <b>Mario</b> but don't click on 
                them more than once!</p>
            <div className="scores">
                <ul className="scores">
                    <li><b>{score} Points</b></li>
                    <li><b>Best Score {bestScore.sort(function(a, b){return b - a})[0]}</b></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;