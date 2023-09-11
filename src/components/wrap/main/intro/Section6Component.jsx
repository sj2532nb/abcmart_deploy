import React from 'react';
import axios from 'axios';
import './scss/section6.scss';

export default function Section6Component(){

    const [state, setState] = React.useState({
        trendOn: []
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section6.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    trendOn: res.data.trend_on
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);


    return (
        <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>TREND ON</h2>
                    </div>
                    <div className="content">
                        <ul>
                            {
                                state.trendOn.map((item, idx)=>{
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <figure>
                                                    <img src={item.src} alt="" />
                                                </figure>
                                                <div className='information-box'>
                                                    <p>{item.title}</p>
                                                    <h3><pre>{item.info}</pre></h3>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};