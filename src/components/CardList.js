import Card from './Card.js';

const CardList = ({robots}) => {
    return (
        <div style={{height: '80vh'}}>
            {
                robots.map((user, i) => 
                    <Card 
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />
                )
            }
        </div>
    );
}

export default CardList;