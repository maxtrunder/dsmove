

import FormCard from 'components/Navbar/FormCard';
import { useParams } from 'react-router-dom';







function Form() {

const params = useParams();    

 

    return (
   <FormCard movieid={'{params.movieid}'}/>
    
    )
}
export default Form;