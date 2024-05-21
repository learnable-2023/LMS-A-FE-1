import CareerCertificate from "../Components/Courses/CareerCertificate"
import ClassLessons from "../Components/Courses/ClassLessons"
import CourseKeyInfo from "../Components/Courses/CourseKeyInfo"
import CourseRequirements from "../Components/Courses/CourseRequirements"
import LearnInfo from "../Components/Courses/LearnInfo"
import RelatedCourses from "../Components/Courses/RelatedCourses"

const CoursePage = ({ details }) => {
  return (
    <>
      <CourseKeyInfo
        id={details.id}
        img={details.img}
        title={details.title}
        text={details.text}
        students={details.students}
        price={details.price}
      />
      <LearnInfo />
      <ClassLessons />
      <CourseRequirements />
      <CareerCertificate />
      <RelatedCourses />
    </>
  )
}

export default CoursePage
