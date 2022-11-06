import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import CardUrl from "../components/CardUrl";
import { getAllUrlLarge } from "../services/url.services";
import { copyElement } from "../utils/copyElements";
import "../static/styles/Me.scss";

const Me = () => {
  const [urls, setUrls] = useState([]);
  const token = useSelector((state) => state.token.value);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return;
    }
    getAllUrlLarge(token).then((res) => {
      res.data.reverse();
      setUrls(res.data);
    });
  }, [token, navigate]);

  const listCart = urls.map((e) => {
    return (
      <CardUrl
        urlLarge={e.originalUrl}
        urlShort={e.urlShort}
        key={e._id}
        onClick={()=>copyElement(e.urlShort)}
      />
    );
  });

  return (
    <div className="structureView">
      <section className="infoUser">
        <h1>User Information</h1>
        <img src={user.urlImage} alt="me" />
        <h2>
            {
                (window.screen.width >= 1024
                ?'Username: '
                :'')+
                user.username
            }
        </h2>
        <h2>
            {
                (window.screen.width >= 1024
                ?'Email: '
                :'')+
                user.email
            }
        </h2>
      </section>
      <section className="urlsList">
        <h1>Your urls list</h1>
        <div className="storeLinks">
            {listCart}
        </div>
      </section>
    </div>
  );
};

export default Me;
