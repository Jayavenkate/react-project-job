import img2 from "../picture/img2.jpg";
import img3 from "../picture/img3.jpg";
import img4 from "../picture/img4.jpg";
export function ImageList() {
  const images = [
    {
      id: 1,
      img: img2,
      heading: "PROJECTS",
      subheading: "INCREASING KNOWLEDGE SKILLS AND HOPE ",
    },
    {
      id: 2,
      img: img3,
      heading: "GIVING",
      subheading: "CHANGING THE LIVES CHILDREN",
    },
    {
      id: 3,
      img: img4,
      heading: "HISTORY",
      subheading: "IMPROVING LIVES FOR GENERATION TO COME",
    },
  ];
  return (
    <div className="image-card">
      {images.map((pic, index) => (
        <div key={index} className="card-img">
          <img className="image" src={pic.img} alt="img" />
          <h1 className="heading-card">{pic.heading}</h1>
          <h6 className="subheading-card">{pic.subheading}</h6>
        </div>
      ))}
    </div>
  );
}
{
  /* <Images images={pic} key={index} /> */
}
// export function Images({ images }) {
//   return (
//     <div>
//       <img className="image" src={images.img} />
//     </div>
//   );
// }
//
