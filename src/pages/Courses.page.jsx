import { useContext, useEffect, useState } from "react"

import Loader from "../components/Loader";
import AnimationWrapper from "../common/page-animation";
import { UserContext } from "../App";
import EnrolePopup from "../components/EnrolePopup";

export const Courses = ({ fakeFetch }) => {
  document.title = "SIIT | Courses";
  const [courses, setCourses] = useState(null);
  // const [course, setCourse] = useState(courses);
  const [selectedCourse, setselectedCourse] = useState("All Courses");
  const [filteredCourse, setFilteredCourse] = useState([])

  const {showPopup, setShowPopup} = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fakeFetch("www.courses");
        setCourses(response.data.courses);
        setFilteredCourse(response.data.courses);
      } catch (error) {
        console.log("Error from server:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(()=>{
    if(selectedCourse === "All Courses"){
      setFilteredCourse(courses);
    }else{
      const filter = courses.filter(
        (course) => course.category === selectedCourse
      );
      setFilteredCourse(filter);
    }
  },[selectedCourse, courses])

  const handleFilter = (category) => {
    setselectedCourse(category);
  }

  const uniqueCategories = [
    "All Courses",
    ...new Set(courses?.map((course) => course.category)),
  ];


  return (
    <>
      {courses ? (
      <AnimationWrapper className="relative">
        <section>
          <div>
            <h1 className="text-4xl my-4">Courses</h1>
            <div>
              <div className="tags flex flex-wrap justify-center">
                {uniqueCategories.map((course, i) => {
                  return (
                    <div
                      key={i}
                      className=" m-2 bg-white rounded-lg cursor-pointer"
                    >
                      <button
                        className="p-2"
                        onClick={() => handleFilter(course)}
                      >
                        {course}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="courses flex flex-wrap justify-center my-10">
                {filteredCourse.map((course) => {
                  const { id, thumbnail, category, course_name } = course;
                  return id ? (
                    <div
                      key={id}
                      className=" bg-white p-4 w-64 rounded-md mt-4 mx-5"
                    >
                      <div className=" relative h-40 overflow-hidden text-center">
                        <img
                          src={thumbnail}
                          alt="img"
                          width={"350px"}
                          className=""
                        />
                      </div>
                      <hr className=" w-full bg-buttons_2 p-[1px] mt-2 border-buttons_2" />
                      <h2 className="text-xl font-bold p-2">{course_name}</h2>
                      <div className="course-details ">
                        <button
                          onClick={() => setShowPopup(true)}
                          className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1"
                        >
                          Enrole
                        </button>
                        {/* <button className=" bg-buttons_1 text-white px-2 py-1 rounded mr-1">
                        Details
                      </button> */}
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>
      ) : (
        <Loader />
      )}
      {showPopup && <EnrolePopup />}
    </>
  ); 
};