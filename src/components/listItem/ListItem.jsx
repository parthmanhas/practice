import './listItem.scss';
import naruto from '../../assets/naruto-logo.png';
const ListItem = (props) => {
  return (
    <div className='listItem'>
      <img src={naruto}></img>
    </div>
  )
}

export default ListItem