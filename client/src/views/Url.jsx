import React, {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { findUrl } from '../controllers/url.controller';

export default function Url() {

    const params = useParams();
    const navigation = useNavigate();
    const urlFinded = findUrl(params.id);

    useEffect(()=>{
        if(urlFinded){
            window.location.replace(urlFinded.originalUrl)
        } else{
            navigation('/')
        }
    }, [urlFinded, navigation])


  return (
    <div>
    </div>
  )
}
