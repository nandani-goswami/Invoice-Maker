import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-blue-100 rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://raw.githubusercontent.com/lwinmoepaing/lwinmoepaing/main/img/gitto.gif"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/testloto"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm Nandani Goswami
              </a>
              <h1> Free Invoice Maker for your business.</h1>
            </div>
          </div>

          <PageTitle title="Invoice Maker" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 I’m looking for Good community and Opportunity to enrich myskills upto a level !!
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:goswaminandani29@gmail.com"
                className="underline cursor-pointer"
              >
                goswaminandani29@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.linkedin.com/in/nandanigoswami/"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </div>
           
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion For each component Animation</li>
              <li> Lottiefiles For Dashboard Widgets Icons</li>
              {/* <li> IndexedDB for Local Storage </li> */}
              <li> ReactJS </li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
