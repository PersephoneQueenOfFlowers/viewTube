import React from 'react';

class signUpPopup extends React.Component{

  render(){
    return (
      <div id="myModal" class="modal">
        <div class="modal-content">
          <h1>some awesome signup text</h1>
          <span class="close">&times;</span>
        </div>
      </div>
    )
  }
}

export default signUpPopup;