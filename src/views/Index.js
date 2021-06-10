/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
    return (
        <>
            <IndexNavbar fixed/>
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-blueGray-600">
                                İnsan Kaynakları Yönetim Sistemi
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                Bu proje <a href="https://kodlama.io/p/yazilim-gelistirici-yetistirme-kampi2"
                                            target="_blank">Engin Demiroğ</a>un önderliğin de ki Java-React kampı için
                                geliştirilmiştir.
                            </p>
                            <div className="mt-12">
                                <Link
                                    to="/auth/login"
                                >
                                    <a
                                        className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        Giriş Yap
                                    </a>
                                </Link>
                                <Link
                                    to="/auth/register"
                                >
                                    <a
                                        className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                    >
                                        Kayıt Ol
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*img dosyası*/}
                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
                    src={require("assets/img/pattern_react.png").default}
                    alt="..."
                />
            </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{transform: "translateZ(0)"}}
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
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-900">
                                <img
                                    alt="..."
                                    src={require("assets/img/jobInterview.jpg").default}
                                    className="w-full align-middle rounded-t-lg"
                                />
                                <blockquote className="relative p-8 mb-4">
                                    <svg
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 583 95"
                                        className="absolute left-0 w-full block h-95-px -top-94-px"
                                    >
                                        <polygon
                                            points="-30,95 583,95 583,65"
                                            className="fill-current"
                                        ></polygon>
                                    </svg>
                                    <h4 className="text-xl font-bold text-white">
                                        İş görüşmesinde 4 iletişim hatası
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Bir iş görüşmesinde iletişim kurma şeklin, işe alınma şansını arttırabilir veya
                                        azaltabilir. İşte, bir iş
                                        görüşmesi sırasında asla yapmaman gereken dört iletişim hatası!
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-1">
                                    <div className="relative flex flex-col mt-1">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold">
                                                Stres Yapmak
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Sıkılmış veya stresli görünmemek için dik oturmalı elini kolunu koyduğun
                                                yere dikkat etmelisin.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold">
                                                Şikayetçi Olmak
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Elbette yaşadığın sorunlar
                                                olabilir, ancak şikayet etmek, profesyonellikten uzak ve kindar
                                                görünmene neden olur.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-1">
                                    <div className="relative flex flex-col min-w-0 mt-1">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold">Yalan Söylemek</h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Kendini daha nitelikli veya daha deneyimli göstermek için asla doğru
                                                olmayan bilgiler vermemelisin.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">

                                            <h6 className="text-xl mb-1 font-semibold">
                                                Önemli Noktalar
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Soruyla ilgili olan en önemli noktalara değinerek, karşı tarafa istediği
                                                cevabı net olarak vermelisin.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 pb-32 pt-48">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                            <div className="md:pr-12">
                                <h3 className="text-3xl font-semibold">
                                    CV Hazırlarken Dikkat Edilmesi Gerekenler
                                </h3>
                                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                    CV hazırlamak isteyen kişilerin CV’nin nasıl hazırlanacağı konusunda bilgi sahibi
                                    olması
                                    gerekir. Bu bilgi günümüzde internet ortamından kolayca edinilebilir.CV hazırlarken
                                    birtakım hususlara dikkat
                                    etmelidir.
                                </p>
                                <ul className="list-none mt-6">
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          1
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-blueGray-500">
                                                    Doğru bilgiler içermelidir
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          2
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-blueGray-500">
                                                    Uzun cümleler olmamalıdır
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="flex items-center">
                                            <div>
                        <span
                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          3
                        </span>
                                            </div>
                                            <div>
                                                <h4 className="text-blueGray-500">
                                                    Yazım kurallarına dikkat edilmelidir
                                                </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                            <img
                                alt="..."
                                className="max-w-full rounded-lg shadow-xl"
                                style={{
                                    transform:
                                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                                }}
                                src={require("assets/img/documentation.png").default}
                            />
                        </div>
                    </div>
                </div>

                <div className="justify-center text-center flex flex-wrap mt-24">
                    <div className="w-full md:w-6/12 px-12 md:px-4">
                        <h2 className="font-semibold text-4xl">Teşekkürler</h2>
                        <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                            Engin Demiroğ hocamızın her konuda ki yardımları için kendisine sonsuz teşekkürler.
                        </p>
                    </div>
                </div>
            </section>

            <section className="block relative z-1 bg-blueGray-600">
                <div className="container mx-auto">
                    <div className="justify-center flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4  -mt-24">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Engin Demiroğ - Youtube
                                    </h5>
                                    <a href={"https://www.youtube.com/channel/UCRjiquPh4mjPNoOV9eCilXQ"}
                                       target={"_blank"}>
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("assets/img/ed-youtube.png").default}
                                            />
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Engin Demiroğ - Kodlama.io
                                    </h5>
                                    <a href={"https://kodlama.io/"} target={"_blank"}>
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("assets/img/ed-kodlamaio.png").default}
                                            />
                                        </div>
                                    </a>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Engin Demiroğ - Instagram
                                    </h5>
                                    <a href={"https://www.instagram.com/engindemirog/"} target={"_blank"}>
                                        <div
                                            className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src={require("assets/img/ed-instagram.png").default}
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blueGray-600 overflow-hidden">
                <div className="container mx-auto pb-64">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                                Açık Kaynak Kodlu
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                                Bu proje açık kaynak olduğundan, herhangi biri herhangi bir amaç için projeyi
                                görüntüleyebilir, kullanabilir, değiştirebilir ve dağıtabilir. Bu izinler açık kaynaklı
                                bir lisans aracılığıyla uygulanmaktadır.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                                Github üzerinden ücretsiz bir şekilde ulaşıp kullanabilirsiniz.
                                Projeye yıldız vermeyi untumayınız!
                            </p>
                            <a
                                href="https://github.com/torukobyte/HRMS_Spring"
                                target="_blank"
                                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                                <i className="fab fa-lg fa-github"></i> Github
                            </a>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                            <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16 bg-blueGray-200 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
                    style={{transform: "translateZ(0)"}}
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
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>
            <Footer/>
        </>
    );
}
