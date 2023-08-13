import {useParams} from 'react-router-dom'
import courses from '../data/courses'

const SingleCourse = () => {
    const params = useParams()
    console.log(params)
  return <h1>Single Course Info</h1>;
};

export default SingleCourse;
