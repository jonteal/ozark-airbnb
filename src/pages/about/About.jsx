import HeaderImage from '../../assets/images/hawksbillcrag.jpg';

import './about.css';

const About = () => {
  return (
    <div className="about-container">
    <h1 className='about-header'>Ozark Airbnb</h1>
    <img className='header-image' src={HeaderImage} alt="Hawksbill Crag in Arkansas" />

    <h2 className='about-title'>When you visit the Ozarks, you take a piece of it wherever you go</h2>

    <div className='about-statements-container'>
        <p className='about-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod rerum saepe necessitatibus porro eaque hic odit sequi, ducimus placeat similique deserunt officiis exercitationem quas. Magni doloremque similique earum laboriosam nostrum, ratione quasi fugiat nemo, animi rerum minima quis at dolor reprehenderit veniam error distinctio amet ipsum molestias. Corporis architecto a libero aperiam! Numquam illo est soluta pariatur repudiandae, fugiat deleniti sequi ipsam ab eveniet cupiditate aut ipsum veniam. Autem qui voluptates officia voluptatum maiores!
        </p>

        <p className='about-text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita voluptate laboriosam facere harum dolorum recusandae assumenda sint repellat molestiae. Vel doloribus in minus repellendus id dignissimos cum aut itaque dolor quia modi, illum quasi, earum enim dolores nemo quae, eligendi maxime dolorum. Esse, deserunt. Repellat mollitia cumque aspernatur quos suscipit!
        </p>

        <div className='about-button-container'>
            <button className='about-book-button'>
                BOOK WITH US
            </button>
        </div>


    </div>
    
</div>
  );
}
 
export default About;