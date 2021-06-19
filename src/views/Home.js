/*eslint-disable*/
import React, {useEffect, useState} from "react";

import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Footer from "components/Footers/Footer.js";
import JobAdvertService from "../services/JobAdvertService";
import HomeJobAdvertList from "../components/Cards/HomeJobAdvertList";
import EmptyJobAdvertList from "../components/Cards/EmptyJobAdvertList";

export default function Home() {

    const [jobAdverts, setJobAdverts] = useState([]);

    let jobAdvertService = new JobAdvertService();

    useEffect(() => {
        let isMounted = true;
        jobAdvertService.getActiveandConfirmedJobAdvert(isDesc)
            .then(result => {
                if (isMounted) setJobAdverts(result.data.data)
            })

        return () => {
            isMounted = false
        }
    }, [jobAdverts])
    let isDesc = true;

    const [isNull, setNull] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (jobAdverts.length <= 0) {
            if (isMounted) setNull(true);

        } else {
            if (isMounted) setNull(false);

        }
        return () => {
            isMounted = false
        }
    }, [jobAdverts])

    return (
        <div style={{background: "linear-gradient(#fff, #8BA5BEFF)"}}>
            <HomeNavbar fixed/>
            {/*<section className="header relative pt-16 items-center absolute h-screen max-h-860-px">*/}

            {isNull ? <EmptyJobAdvertList/> : <HomeJobAdvertList/>}


            {/*img dosyası*/}
            {/*<img*/}
            {/*    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"*/}
            {/*    src={require("assets/img/pattern_react.png").default}*/}
            {/*    alt="..."*/}
            {/*/>*/}
            {/*</section>*/}

            <section className="mt-20 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
