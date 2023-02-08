import { useToast } from '@chakra-ui/react';
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const {isAuthenticate}=useSelector((state)=>state.root)
    const toast=useToast();

    const multiFunc=()=>{
        dispatch({type:'login'});
        navigate('/blog');
        toast({
            title:'Login',
            description:'Login successfully',
            status:'success',
            duration:3000,
            isClosable:true,
        })
    }
  return (
    <div>
        <button onClick={multiFunc}>Login</button>
    </div>
  )
}

export default Login