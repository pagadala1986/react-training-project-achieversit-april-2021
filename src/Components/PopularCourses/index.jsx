import React, { Component } from "react";
class PopularCourses extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      allProducts: [
        {
          name: "Angular training",
          img: "https://www.achieversit.com/uploads/course_image/angular-img.png",
          desc: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built Angular`,
        },
        {
          name: "Web Developer training",
          img: "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
          desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. `,
        },
        {
          name: "ReactJS training",
          img: "https://www.achieversit.com/uploads/course_image/react-img2.png",
          desc: `React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`,
        },
        {
          name: "Angular training",
          img: "https://www.achieversit.com/uploads/course_image/angular-img.png",
          desc: `Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built Angular`,
        },
        {
          name: "Web Developer training",
          img: "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
          desc: `Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. `,
        },
        {
          name: "ReactJS training",
          img: "https://www.achieversit.com/uploads/course_image/react-img2.png",
          desc: `React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`,
        },
      ],
    };
    //pushing new object by collecting from parent as props
    this.state.allProducts.push(props.addProducts);
    //Binding this keyword
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    //debugger;
    this.setState({
      allProducts: [
        ...this.state.allProducts,
        {
          name: "Bootstrap training",
          img: "https://www.achieversit.com/uploads/course_image/angular-img.png",
          desc: `Bootstrap is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built Angular`,
        },
      ],
    });
  }
  render() {
    var popularCourses;
    if (this.state.allProducts.length > 0) {
      popularCourses = this.state.allProducts.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt="Angular" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.desc}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-danger">
              There is no products, Please try after some time
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <i
              className="fas fa-plus-circle float-end fa-md"
              data-bs-toggle="modal"
              data-bs-target="#addProductModal"
            >
              Add Product
            </i>
          </div>
          {popularCourses}
        </div>
        <div className="modal" tabindex="-1" id="addProductModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Name of Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Angular Training"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput2" className="form-label">
                    Image Path
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="https://www.achieversit.com/uploads/course_image/angular-img.png"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput3" className="form-label">
                    Description of Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput3"
                    placeholder="Angular Training Desciption"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCourses;
