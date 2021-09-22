import React from 'react';

const Home = (props) => {
    return(
       <div>
           Child component Called Home and {props.home}.

           And {props.pi}.
       </div> 
    );
}

export default Home;