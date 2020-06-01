import React from "react";
import { Slide } from 'react-slideshow-image';
import { makeStyles } from '@material-ui/core/styles';

const slidetheme = makeStyles((theme) => ({
  slidecontainer: {
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: '20px',
    fontSize: '100px',
  },
  textcontainer: {
    position: 'absolute',
    width: '96vw',
    padding: '2vw',
    background: 'rgb(0, 0, 0,.5)',
    top: '50%',
    transform: `translateY(-50%)`,
    height: '200px'
  }

}));

var q = document.getElementById('about')
console.log(q);

export default function slideshow() {
  const classes = slidetheme();

  const slideImages = [
    'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/86296253_508593593409417_6663640119066492928_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=yNA0f0Tqb0oAX9_glua&_nc_ht=scontent.fhan2-2.fna&oh=2e3bdfeffcc70f77ccaf7e994fed5757&oe=5EF63C4B',
    'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.15752-9/86831290_218614689276438_5710423113276063744_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=jr3kY26L7eUAX8WUfCQ&_nc_ht=scontent.fhan2-1.fna&oh=4905d7e0c31ed5927c1a884a6c7aa8bd&oe=5EF61EEE',
    'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.15752-9/86702912_890671324721460_270641510117015552_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=JwYfdDnL1tYAX-b5KMK&_nc_ht=scontent.fhan2-2.fna&oh=ee25e880a5f0fc476f8326311d556f0b&oe=5EF5A220'
  ];

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  }

  return (
    <>
      <div className="slide-container" style={{ marginTop: '10vh' }}>
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }} className={classes.slidecontainer}>
              <div className={classes.textcontainer}><div className={classes.text}>Gia vi tuyet voi</div></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }} className={classes.slidecontainer}>
              <div className={classes.textcontainer}><div className={classes.text}>Du Dinh Duong</div></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }} className={classes.slidecontainer}>
              <div className={classes.textcontainer}><div className={classes.text}>Gia Re Sach</div></div>
            </div>
          </div>
        </Slide>
      </div>
    </>
  )
}