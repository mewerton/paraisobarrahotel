import styled from "styled-components"

export const Container = styled.div`

  margin: 1rem 0 0 0;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin-bottom: 5rem;
  


img {
  max-width: 100%;
}
.gallery-wrapper {
  
  width: 100%;
  margin: auto;
  padding: 0rem 6rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1em;
}

.image-wrapper a img{
        height: 200px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
}

.gallery-wrapper .image-wrapper a {
  padding: 0.5em;
  display: block;
  width: 100%;
  text-decoration: none;
  color: #333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;
  text-align: center;
}
.image-title{text-align: center;}
.gallery-wrapper .image-wrapper a:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}
.gallery-wrapper .image-wrapper a img {
  width: 100%;
}
.gallery-lightboxes .image-lightbox {
  position: fixed;
  top: 10%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0ms ease-in-out;
}
.gallery-lightboxes .image-lightbox:target {
  opacity: 1;
  visibility: visible;
}
.gallery-lightboxes .image-lightbox:target .image-lightbox-wrapper {
  opacity: 1;
  transform: scale(1, 1) translateY(0);
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper {
  transform: scale(0.95, 0.95) translateY(-30px);
  transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;
  opacity: 0;
  margin: 1em auto;
  max-width: 75%;
  padding: 0.5em;
  display: inline-block;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  position: relative;
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .close {
  width: 1.5em;
  height: 1.5em;
  background: #000;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50%;
  box-shadow: 0 0 0 2px white inset, 0 0 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  right: -1em;
  top: -1em;
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .close:before {
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  background: #fff;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1px 0 0 -5px;
  transform: rotate(-45deg);
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .close:after {
  content: "";
  display: block;
  width: 10px;
  height: 2px;
  background: #fff;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1px 0 0 -5px;
  transform: rotate(45deg);
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .arrow-left {
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 0;
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .arrow-left:before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-bottom: 0;
  border-right: 0;
  border-radius: 4px 0 0 0;
  position: absolute;
  top: 50%;
  right: 100%;
  cursor: pointer;
  transform: rotate(-45deg) translateY(-50%);
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .arrow-right {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper .arrow-right:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-bottom: 0;
  border-left: 0;
  border-radius: 0 4px 0 0;
  position: absolute;
  top: 50%;
  left: 100%;
  cursor: pointer;
  transform: rotate(45deg) translateY(-50%);
}
.gallery-lightboxes .image-lightbox .image-lightbox-wrapper img {
  margin: 0 auto;
  max-height: 72vh;
  
}
h1{
    padding: 25px; 
    background: transparent;
}

@media screen and (max-width: 850px){
  
  .gallery-wrapper {
  
  padding: 0rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1em;
}

}

@media screen and (max-width: 550px){
  .image-wrapper a img{
    height: 350px;
  }
}




`