const MarioGrid = ({grid, shuffle}) => {
    return (
        <div id="mario-grid">
            {grid.map((card)=>{
                return  <div    key={card.id} id={card.id}
                
                                className="mario-container"
                                onClick={shuffle}
                                >
                            <img    src={card.src} 
                                    alt={card.name}
                                    className="mario-img" id={card.id}/>
                            <p id={card.id}><b>{card.name} Mario</b></p>
                        </div>

            })}
        </div>
    )
}

export default MarioGrid;