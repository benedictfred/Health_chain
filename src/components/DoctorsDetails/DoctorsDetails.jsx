import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
import { doctors } from "../../data/doctorsData";

function DoctorsDetails() {
  const { id } = useParams(); // Get doctor ID from URL
  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Category 1");

  const handleNavbarClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter images based on selected category
  const filteredImages = doctors.filter(
    (image) => image.category === selectedCategory
  );

  return (
    <div className=" pt-12 shadow-2xl mx-8">
      {doctor ? (
        <div>
          <div className="md:px-8 px-6 ">
            <div className="flex items-center md:items-start justify-center md:flex-row flex-col  md:gap-8">
              <div>
                <img
                  src={doctor.src}
                  className="bg-blue shadow-2xl rounded-md"
                />
              </div>
              <div className="md:w-3/6">
                <div className="bg-white p-8 md:p-9 shadow-2xl   rounded-md">
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="font-bold text-2xl">{doctor.name}</h2>
                    <img src={doctor.icon} className="w-10 h-10" alt="" />
                  </div>
                  <p className="flex flex-col md:flex-row md:items-center font-semibold mb-3 text-gray-900">
                    {doctor.skill}{" "}
                    <span className="text-gray-500 md:mx-3 py-2 px-3 md:mt-0 mt-2 border rounded-full text-sm">
                      {doctor.year}
                    </span>
                  </p>
                  <h5 className=" text-gray-900 font-medium text-lg">
                    {doctor.about}{" "}
                    <FontAwesomeIcon icon={doctor.icon2} className="mr-2 w-3" />
                  </h5>
                  <p className="text-sm  text-gray-800">{doctor.text}</p>
                  <h5 className="pt-2 font-bold text-gray-600">
                    {doctor.appoint} :{" "}
                    <span className="text-gray-950">{doctor.amount} </span>
                  </h5>
                </div>

                <div>
                  <h5 className="font-bold text-lg pt-8">{doctor.booking}</h5>
                  <div className="date">
                    <ul className="grid grid-cols-5 md:grid-cols-6 md:w-96 text-sm ">
                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 1")}
                          className=" active mt-3 border w-14 h-20 flex flex-col items-center justify-center gap-1  py-4 px-2 text-gray-600  rounded-full "
                        >
                          <span>MON</span> <span>22</span>
                        </p>
                      </li>

                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 2")}
                          className=" border w-14 h-20 py-8 px-2 mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1   "
                        >
                          {" "}
                          <span>TUE</span> <span>23</span>
                        </p>
                      </li>
                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 3")}
                          className=" py-8 px-2 w-14 h-20 mt-3 border text-gray-600 rounded-full flex flex-col items-center justify-center gap-1  "
                        >
                          <span>WED</span> <span>24</span>
                        </p>
                      </li>

                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 4")}
                          className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"
                        >
                          <span>THUS</span> <span>25</span>
                        </p>
                      </li>

                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 5")}
                          className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"
                        >
                          <span>FRI</span> <span>26</span>
                        </p>
                      </li>

                      <li>
                        <p
                          onClick={() => handleNavbarClick("Category 6")}
                          className=" py-8 px-2 w-14 h-20 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1 "
                        >
                          <span>SAT</span> <span>27</span>
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    {filteredImages.map((image) => (
                      <h3
                        className="grid grid-cols-4 md:grid-cols-6 md:w-5/6 text-sm text-gray-600 mt-4"
                        key={image.id}
                      >
                        <span className="border rounded-full p-2 w-20 h-11 mt-2 flex items-center justify-center">
                          {image.time1}
                        </span>
                        <span className="border text-center w-20 mt-2 h-11 rounded-full py-2 px-2 flex items-center justify-center">
                          {image.time2}
                        </span>
                        <span className="border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center">
                          {image.time3}
                        </span>
                        <span className="border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center">
                          {image.time4}
                        </span>
                        <span className="border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center">
                          {image.time5}
                        </span>
                        <span className="border w-20 h-11 mt-2 rounded-full p-2  flex items-center justify-center">
                          {image.time6}
                        </span>
                      </h3>
                    ))}
                    <button
                      onClick={() => navigate("/booking")}
                      className="text-lg bg-blue text-white py-3 my-7 px-6 rounded-full"
                      type="button"
                    >
                      {doctor.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-center font-bold text-2xl">
                {doctor.related}
              </h3>
              <p className="text-center text-sm pt-1">{doctor.related2}</p>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <p>Doctor not found</p>
      )}
    </div>
  );
}

export default DoctorsDetails;
