import React, { useEffect } from "react";
import img2 from "../images/man-golf-field-flag_23-2148822983.jpg";
import AOS from "aos";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div class="row  mt-3 mb-5">
      {/* <div class="">
        <nav
          id="findmore"
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <div
              class="collapse navbar-collapse d-flex justify-content-center "
              id="navbarNa">
              
              <div>
              <h5 class="text-light" data-aos="fade-up-left ">--Welcome--</h5>
              <br />
              <h1 class="text-light" data-aos="fade-up-right  ">The Home Of PJ Club</h1>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="col-md-5 d-flex align-items-cente ">
        <img src={img2} class="p-3 d-block w-100 rounded" alt="..." />
      </div>

      <div class="col-md-7" data-aos="fade-right">
        <p>About us</p>
        <h1 class="text-success mx-auto fs-1" data-aos="fade-up-left">
          PJ Club is The Best for Glof and sweeming
        </h1>
        <br />
        <div data-aos="fade-in-left">
          <p class="text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            laudantium officia fuga delectus nulla hic nam. Libero eum est
            perferendis unde tempore quam architecto alias, placeat ad odit
            labore explicabo mollitia, itaque ipsum molestias repellat
            obcaecati, delectus earum excepturi? Incidunt explicabo odit
            aspernatur maxime ullam facilis tenetur optio veniam fuga ut iure
            ea, inventore neque magnam numquam accusantium placeat dicta! Vero
            iure earum error odio dolore id sunt nam magni suscipit animi
            dignissimos inventore placeat quas, quo, omnis unde eligendi tempora
            ipsum officiis? Repellendus culpa fuga ad animi, eaque, porro magnam
            ullam maxime at facere ducimus neque! Provident quibusdam sunt unde
            adipisci odit at nesciunt facilis corrupti expedita? Odio iste non
            quo at veniam blanditiis rerum illum ea? Necessitatibus sunt magnam,
            asperiores repellat veritatis quis. Nobis molestias qui eius maiores
            odit at, cupiditate tempore quidem velit, corrupti similique quis
            quos quod fugit blanditiis exercitationem omnis? Impedit vero amet
            accusamus eius illum, assumenda nobis ex eligendi dicta, nostrum
            obcaecati aperiam molestiae sit voluptatem quisquam neque cumque
            temporibus! Maxime, provident doloremque! Odit cupiditate,
            voluptatem quos necessitatibus aliquam enim cum, maxime quis
            aspernatur amet aperiam laboriosam illo quasi quod quam accusantium?
            Sit, alias quisquam magni fuga consequuntur quibusdam quod quae
            optio fugit. Quasi!
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
