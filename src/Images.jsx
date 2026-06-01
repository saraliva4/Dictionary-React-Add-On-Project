export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <section className="Images">
        <div className="row">
          {props.images.slice(0, 8).map(function (image, index) {
            return (
              <div className="col-3" key={index > 12}>
                <a href={image.src.original} rel="noreferrer" target="_blank">
                  <img
                    src={image.src.landscape}
                    alt={image.alt}
                    className="img-fluid mb-4 rounded"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
