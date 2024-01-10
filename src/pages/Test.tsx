import { useQuery } from "react-query";
import axios from "axios";

const Test = () => {

  const fetchTest = async () => {
    const res = await axios.get('http://ec2-43-201-12-132.ap-northeast-2.compute.amazonaws.com:8080/board/search/all', {
      withCredentials: true,
    })
    return res.data
  }

  const {data} = useQuery({
    queryKey: ['testdata'],
    queryFn: fetchTest
  })
  console.log(data)
  return ( 
    <div>
      {data ? data : 'error'}
    </div>
  );
}

export default Test;