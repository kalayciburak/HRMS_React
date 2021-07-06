import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import CurriculaVaiteService from "../../services/CurriculaVaiteService";
import TechnologyService from "../../services/TechnologyService";

function AddTechnology(props) {

    const [cv, setCv] = useState([]);

    const curriculaVitaeService = new CurriculaVaiteService();

    const technologyService = new TechnologyService();

    useEffect(() => {
        let isMounted = true
        curriculaVitaeService.findCvByJobSeekerId(props.getTechnologies()).then((res) => {
            if (isMounted) {
                setCv(res.data.data)
            }
        })
        return () => {
            isMounted = false;
        };
    }, []);

    function addTechnology(technology) {
        return technologyService.addTechnology(technology).then(() => {
            props.getTechnologies()
        })
    }

    return (
        <div>
            <span
                title={"Yetenek Ekle"}
                className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
                onClick={async () => {
                    try {
                        const {value: technologyName} = await Swal.fire({
                                                                            title: 'Teknoloji/Yetenek Adı',
                                                                            input: 'text',
                                                                            inputPlaceholder: 'Bir Teknoloji/Yetenek giriniz',
                                                                            showCancelButton: true,
                                                                            cancelButtonText: "Vazgeç",
                                                                            confirmButtonText: "Kaydet",
                                                                            allowOutsideClick: false,
                                                                            inputAttributes: {
                                                                                maxlength: 13
                                                                            },

                                                                            inputValidator: (value) => {
                                                                                return new Promise(
                                                                                    (resolve) => {
                                                                                        if (value != '') {
                                                                                            resolve()
                                                                                        } else {
                                                                                            resolve(
                                                                                                'Bu alan boş bırakılamaz!')
                                                                                        }
                                                                                    })
                                                                            }
                                                                        })

                        if (technologyName) {
                            let technology = {
                                curriculaVitaeId: cv.id,
                                id: 0,
                                plName: technologyName
                            }
                            addTechnology(technology)
                            Swal.fire({
                                          icon: 'success',
                                          title: 'Teknoloji/Yetenek bilgisi başarıyla eklendi!',
                                          showConfirmButton: false,
                                          timer: 1500
                                      })

                        } else {
                            Swal.fire({
                                          position: 'center',
                                          icon: 'info',
                                          title: 'İşlemi iptal ettiniz!',
                                          showConfirmButton: false,
                                          timer: 1500
                                      })
                        }

                    } catch (e) {
                        // console.log(e)
                        Swal.fire({
                                      icon: 'error',
                                      title: 'HATA',
                                      text: e,
                                      confirmButtonText: "Tamam"
                                  })
                    }
                }}

            >
                    <i className={"fas fa-sm fa-plus"}></i> Ekle
                    </span>
        </div>
    );
}

export default AddTechnology;
