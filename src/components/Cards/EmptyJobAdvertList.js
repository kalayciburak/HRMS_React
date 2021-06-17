import React from 'react';
import logo from 'assets/img/logo.png'

function EmptyJobAdvertList(props) {
    return (
        <div className={"mx-auto w-1/2"} style={{marginTop: 100}}>
            {/*<img src={"https://i.ibb.co/4pnb4G3/Untitled-2.png"} />*/}
            <img src={logo}/>
            <h1 className="text-4xl font-semibold leading-normal text-blueGray-800 text-center"
                style={{marginTop: -20}}>Kayıtlı iş ilanı bulunamadı!</h1>
        </div>
    );
}

export default EmptyJobAdvertList;
