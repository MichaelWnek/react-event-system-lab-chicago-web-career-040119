import React from 'react';

class EyesOnMe extends React.Component {

    //When console logging an event
    onFocus = () => console.log('Good!')

    onBlur = () => console.log('Hey! Eyes on me!')

    render() {
       return ( 
        <button onFocus={this.onFocus} onBlur={this.onBlur}> 

        </button>
       ) 
    }

}

export default EyesOnMe