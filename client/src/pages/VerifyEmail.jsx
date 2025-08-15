// /pages/VerifyEmail.jsx

import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  
  async function verifyEmail(){
    const code=params.get("code")
    console.log(" going to verify mail baby");
    try{
        const response=await Axios({
            ...SummaryApi.verifyEmail,
            data:{code}
    })
    navigate('/')
    console.log("verify-email data",response);
    }
    catch(err){
        console.log("Error in verify-email",err.response);
    }
        
  }
  useEffect(()=>{verifyEmail()},[])
  return <div>Verifying your email...</div>;
};

export default VerifyEmail;
