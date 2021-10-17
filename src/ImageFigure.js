function ImageFigure(props) {
  return(
    <figure>
      <img src={props.imgsrc}
      alt={props.alt}
      width={props.width}
      height={props.height} />
  <figcaption>{props.figcaption}</figcaption>
  </figure>
  )
}

export default ImageFigure;