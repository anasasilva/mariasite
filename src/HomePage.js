import React from 'react';

import tedx10 from './assets/tedx10.jpeg';
import videoclip2 from './assets/videoclip2.jpg';

import { Container, Col, Row } from 'react-bootstrap';

import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import CloseIcon from '@material-ui/icons/Close';

import './HomePage.css';

function HomePage() {
  // const [showMenu, setShowMenu] = React.useState(false);
  // const onClick = () => setShowMenu(true)

  const [language, setLanguage] = React.useState(false);
  const portuguese = () => setLanguage(false);
  const english = () => setLanguage(true);

  const [darkNavBar, setNavBar] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop;
        if (scrolled >= window.innerHeight * 80 / 100) {
          setNavBar(true);
        } else {
          setNavBar(false);
        }
    });
  });

  return (
    <div className="HomePage">
      <div className={"header " + (darkNavBar ? "black-bg" : "")}>
        <h1 className="title">Maria Sá Silva</h1>
        <div className="d-flex my-auto">
          <a className={"mr-3 white"} onClick={portuguese}><h5 className={"text-font " + (language ? "" : "underline")}>PT</h5></a>
          <a className={"mr-3 white"} onClick={english}><h5 className={"text-font " + (language ? "underline" : "")}>ENG</h5></a>
        </div>

        {/* { showMenu ? 
          <a><h1><CloseIcon className="largeIcon black z-100" /></h1></a> : 
          <a onClick={onClick} ><h1><MenuIcon className="largeIcon" /></h1></a>
        } */}
      </div>
      <div>
        <img src={tedx10} className="image" alt="logo" />

        {/* { showMenu ? null :  */}

          <div className="imgFooter">
            <a href="mailto:mariasasousa@hotmail.com" className="white"><EmailIcon className="noRightPadding socialIcon"/></a>
            <a href="http://www.instagram.com/mariasasilva97" className="white"><InstagramIcon className="socialIcon"/></a>
            <a href="https://www.facebook.com/maria.sasilva.98" className="white"><FacebookIcon className="socialIcon"/></a>
          </div>
        {/* } */}
      </div>
      {/* { showMenu ? <Menu /> : <Info /> } */}
      <div>
        <div className="text text-font">
          { language ? 
          <p>
            EM Ingles: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis. Nam aliquam sem et tortor consequat id porta nibh. Non blandit massa enim nec. Elit at imperdiet dui accumsan sit. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Imperdiet nulla malesuada pellentesque elit eget. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sit amet justo donec enim. Pellentesque diam volutpat commodo sed. Est sit amet facilisis magna. Bibendum ut tristique et egestas quis ipsum suspendisse.
            Cras adipiscing enim eu turpis egestas pretium. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue eu consequat ac felis donec. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Eu augue ut lectus arcu bibendum at varius vel pharetra. At urna condimentum mattis pellentesque id nibh. Viverra ipsum nunc aliquet bibendum. Pharetra convallis posuere morbi leo urna. Arcu odio ut sem nulla pharetra. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. In metus vulputate eu scelerisque. Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum nunc aliquet. Sed velit dignissim sodales ut eu sem integer vitae justo. Augue neque gravida in fermentum et. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Aliquam eleifend mi in nulla posuere sollicitudin. Vivamus at augue eget arcu.
            Curabitur vitae nunc sed velit. Turpis tincidunt id aliquet risus feugiat in ante metus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Enim diam vulputate ut pharetra sit amet aliquam id. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Vitae congue eu consequat ac felis donec et odio pellentesque. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Etiam sit amet nisl purus. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Interdum consectetur libero id faucibus nisl tincidunt. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Leo integer malesuada nunc vel risus commodo. Enim nunc faucibus a pellentesque sit. Tincidunt ornare massa eget egestas purus. Mi proin sed libero enim sed faucibus. Etiam sit amet nisl purus.
            Non enim praesent elementum facilisis leo vel. Urna nunc id cursus metus aliquam eleifend mi. Gravida cum sociis natoque penatibus. Vitae tempus quam pellentesque nec nam aliquam sem. Vitae congue mauris rhoncus aenean vel. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Molestie ac feugiat sed lectus vestibulum. Varius vel pharetra vel turpis nunc eget. Laoreet sit amet cursus sit. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Tempus quam pellentesque nec nam aliquam. Sit amet facilisis magna etiam tempor orci. Diam in arcu cursus euismod quis viverra. A erat nam at lectus urna duis convallis convallis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
            Amet nisl purus in mollis nunc. Sit amet commodo nulla facilisi. Etiam dignissim diam quis enim lobortis scelerisque. Netus et malesuada fames ac turpis egestas. Sodales neque sodales ut etiam sit amet. Tempus urna et pharetra pharetra massa. Nunc mattis enim ut tellus. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in. Tortor aliquam nulla facilisi cras. Cum sociis natoque penatibus et. Eget est lorem ipsum dolor sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim. In mollis nunc sed id semper risus in hendrerit gravida. Arcu non odio euismod lacinia at quis. In metus vulputate eu scelerisque felis. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.
          </p>
          :
          <p>
            EM Portugues: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ultricies lacus sed turpis. Nam aliquam sem et tortor consequat id porta nibh. Non blandit massa enim nec. Elit at imperdiet dui accumsan sit. Condimentum vitae sapien pellentesque habitant morbi tristique. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Imperdiet nulla malesuada pellentesque elit eget. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Sit amet justo donec enim. Pellentesque diam volutpat commodo sed. Est sit amet facilisis magna. Bibendum ut tristique et egestas quis ipsum suspendisse.
            Cras adipiscing enim eu turpis egestas pretium. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue eu consequat ac felis donec. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Eu augue ut lectus arcu bibendum at varius vel pharetra. At urna condimentum mattis pellentesque id nibh. Viverra ipsum nunc aliquet bibendum. Pharetra convallis posuere morbi leo urna. Arcu odio ut sem nulla pharetra. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. In metus vulputate eu scelerisque. Donec et odio pellentesque diam volutpat commodo. Lorem dolor sed viverra ipsum nunc aliquet. Sed velit dignissim sodales ut eu sem integer vitae justo. Augue neque gravida in fermentum et. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Aliquam eleifend mi in nulla posuere sollicitudin. Vivamus at augue eget arcu.
            Curabitur vitae nunc sed velit. Turpis tincidunt id aliquet risus feugiat in ante metus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Enim diam vulputate ut pharetra sit amet aliquam id. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Vitae congue eu consequat ac felis donec et odio pellentesque. Commodo ullamcorper a lacus vestibulum sed arcu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Etiam sit amet nisl purus. Amet mauris commodo quis imperdiet massa tincidunt nunc. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Interdum consectetur libero id faucibus nisl tincidunt. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Leo integer malesuada nunc vel risus commodo. Enim nunc faucibus a pellentesque sit. Tincidunt ornare massa eget egestas purus. Mi proin sed libero enim sed faucibus. Etiam sit amet nisl purus.
            Non enim praesent elementum facilisis leo vel. Urna nunc id cursus metus aliquam eleifend mi. Gravida cum sociis natoque penatibus. Vitae tempus quam pellentesque nec nam aliquam sem. Vitae congue mauris rhoncus aenean vel. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Molestie ac feugiat sed lectus vestibulum. Varius vel pharetra vel turpis nunc eget. Laoreet sit amet cursus sit. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Tempus quam pellentesque nec nam aliquam. Sit amet facilisis magna etiam tempor orci. Diam in arcu cursus euismod quis viverra. A erat nam at lectus urna duis convallis convallis. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
            Amet nisl purus in mollis nunc. Sit amet commodo nulla facilisi. Etiam dignissim diam quis enim lobortis scelerisque. Netus et malesuada fames ac turpis egestas. Sodales neque sodales ut etiam sit amet. Tempus urna et pharetra pharetra massa. Nunc mattis enim ut tellus. Nunc non blandit massa enim nec dui nunc mattis enim. Vestibulum lectus mauris ultrices eros in. Tortor aliquam nulla facilisi cras. Cum sociis natoque penatibus et. Eget est lorem ipsum dolor sit amet. Vitae elementum curabitur vitae nunc sed velit dignissim. In mollis nunc sed id semper risus in hendrerit gravida. Arcu non odio euismod lacinia at quis. In metus vulputate eu scelerisque felis. Lobortis feugiat vivamus at augue eget arcu dictum varius duis.
          </p> 
          }
        </div>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <img src={videoclip2} className="video" alt="logo" />
              </Col>
              <Col>
                <h1 className="mt-4 white text-font text-title">Próximos Espetáculos</h1>
                <h5 className="mt-4 white text-font">7 e 8 de Novembro: Concerto a Solo com <a href="https://www.occo.pt/homepage/" className="white underline" >OCCO</a></h5>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
