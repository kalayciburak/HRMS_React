import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import SocialMediService from "../../services/SocialMediService";

function UpdateSocialMedia(props) {

    const socialMediaService = new SocialMediService();

    const [smId, setSmId] = useState([]);

    function getSocialMediaByCvId() {
        return socialMediaService.getSocialMediaByCurriculaVitaeId(props.getSocialMedias());
    }

    useEffect(() => {
        let isMounted = true
        getSocialMediaByCvId().then((res) => {
            if (isMounted) {
                setSmId(res.data.data)
            }
        })
        return () => {
            isMounted = false;
        };
    }, []);

    function updateSocialMedia(sm) {
        return socialMediaService.updateSocialMedia(sm).then(() => {
            getSocialMediaByCvId().then((res) => {
                setSmId(res.data.data)
            })
            props.getSocialMedias()
        })
    }

    return (
        <div>
            <span
                className="bg-indigo-500 cursor-pointer px-2 text-blueGray-300 active:bg-indigo-500 hover:bg-purple-400 text-xs font-semibold capitalize px-1 rounded shadow outline-none focus:outline-none mr-1 ease-linear transition-all duration-250"
                onClick={async () => {
                    try {
                        const {value: githubUserName} = await Swal.fire({
                                                                            title: 'Github Kullanıcı Adı',
                                                                            input: 'text',
                                                                            inputPlaceholder: 'Github kullanıcı adınızı giriniz',
                                                                            inputValue: smId.githubUsername,
                                                                            showCancelButton: true,
                                                                            cancelButtonText: "Vazgeç",
                                                                            confirmButtonText: "Kaydet",
                                                                            allowOutsideClick: false,
                                                                            inputAttributes: {
                                                                                maxlength: 21
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

                        if (githubUserName) {
                            const {value: linkedinUserName} = await Swal.fire({
                                                                                  title: 'Linkedin Kullanıcı Adı',
                                                                                  input: 'text',
                                                                                  inputPlaceholder: 'Linkedin kullanıcı adınızı giriniz',
                                                                                  inputValue: smId.linkedinUsername,
                                                                                  showCancelButton: true,
                                                                                  cancelButtonText: "Vazgeç",
                                                                                  confirmButtonText: "Kaydet",
                                                                                  allowOutsideClick: false,
                                                                                  inputAttributes: {
                                                                                      maxlength: 21
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
                            if (linkedinUserName) {
                                let socialMedia = {
                                    curriculaVitaeId: props.getSocialMedias(),
                                    githubUsername: githubUserName,
                                    id: smId.id,
                                    linkedinUsername: linkedinUserName
                                }
                                updateSocialMedia(socialMedia);
                                Swal.fire({
                                              icon: 'success',
                                              title: 'Sosyal Medya bilgileriniz başarıyla güncellendi!',
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
                    <i className={"fas fa-sm fa-edit"}></i> Düzenle
                    </span>
        </div>
    );
}

export default UpdateSocialMedia;
