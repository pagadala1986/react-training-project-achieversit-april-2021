import PopularCourses from "../PopularCourses";
let Home = () => {
  var newProduct = {
    name: "VueJs training",
    img: "https://www.achieversit.com/uploads/course_image/react-img2.png",
    desc: `VueJs is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`,
  };
  return (
    <>
      <h1>Popular Products</h1>
      <PopularCourses addProducts={newProduct} />
    </>
  );
};

export default Home;
