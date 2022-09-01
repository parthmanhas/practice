import './listItem.scss';

const ListItem = (props) => {
  return (
    <div className='listItem' style={{backgroundColor: props.color}}>ListItem</div>
  )
}

export default ListItem