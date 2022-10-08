import { RefObject } from 'react';
import './Navbar.scss';

const Navbar = ({ scrollTo, editMode, dataToSave } : { scrollTo: RefObject<HTMLDivElement>, editMode?: boolean, dataToSave?: any}) => {

  const executeScroll = () => {
    scrollTo.current.scrollIntoView({ behavior: 'smooth' });
  };

  const updateText = (e, identifier: string) => {
    navbarElementsData[identifier] = e.target.innerHTML;
    dataToSave['navbar'] = navbarElementsData;
  }

  const navbarElementsData = {
    0: 'Finsweet',
    1: 'Home',
    2: 'Blog',
    3: 'About Us',
    4: 'Contact Us',
    5: 'Subscribe'
  }

  return (
    <div className='nav'>
        <div className='logo' onInput={e => updateText(e, '0')} contentEditable={editMode}>
        &#123;{navbarElementsData[0]}
        </div>
        <ul className='nav-items'>
            <li><a href='/home' onInput={e => updateText(e, '1')} contentEditable={editMode}>{navbarElementsData[1]}</a></li>
            <li><a href='/blog' onInput={e => updateText(e, '2')} contentEditable={editMode}>{navbarElementsData[2]}</a></li>
            <li><a href='/about-us' onInput={e => updateText(e, '3')} contentEditable={editMode}>{navbarElementsData[3]}</a></li>
            <li><a href='/contact-us' onInput={e => updateText(e, '4')} contentEditable={editMode}>{navbarElementsData[4]}</a></li>
            <li><button onClick={editMode ? () => {} : executeScroll} contentEditable={editMode}>{navbarElementsData[5]}</button></li>
        </ul>
    </div>
  )
}

export default Navbar