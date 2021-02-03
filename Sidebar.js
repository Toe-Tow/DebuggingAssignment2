import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      /*here I used a += method to concatenate the item values.
      another way would be to put responseHTML =  responseHTML + item; 
      but I felt that that was less orginized and unnecessary.*/
      responseHTML += `<li>${item}</li>`;
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
    });

    return responseHTML;
  }
}

export default Sidebar;
