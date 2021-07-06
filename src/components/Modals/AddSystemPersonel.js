import React from "react";
import SystemPersonelService from "../../services/SystemPersonelService";
import Swal from "sweetalert2";

export default function AddSystemPersonel(props) {

    const personelService = new SystemPersonelService();

    function addSystemPersonel(systemPersonel) {
        return personelService.addSystemPersonel(systemPersonel)
    }

    return (
        <>
            <button
                className={"absolute bg-emerald-500 text-white rounded-full font-bold uppercase text-sm px-6 py-3 rounded shadow outline-none focus:outline-none ease-linear transition-all duration-150"}
                onClick={async () => {
                    const {value: username} = await Swal.fire({
                                                                  title: '1/3 Kullanıcı Adı',
                                                                  input: 'text',
                                                                  inputPlaceholder: 'Kullanıcı adı giriniz',
                                                                  showCancelButton: true,
                                                                  cancelButtonText: "Vazgeç",
                                                                  confirmButtonText: "Kaydet",
                                                                  allowOutsideClick: false,
                                                                  inputAttributes: {
                                                                      maxlength: 35
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

                    if (username) {
                        const {value: email} = await Swal.fire({
                                                                   title: '2/3 E-Posta',
                                                                   input: 'email',
                                                                   inputPlaceholder: 'E-posta giriniz',
                                                                   showCancelButton: true,
                                                                   cancelButtonText: "Vazgeç",
                                                                   confirmButtonText: "Kaydet",
                                                                   allowOutsideClick: false,
                                                                   inputAttributes: {
                                                                       maxlength: 50
                                                                   },

                                                                   inputValidator: (value) => {
                                                                       let re = /\S+@\S+\.\S+/;
                                                                       return new Promise(
                                                                           (resolve) => {
                                                                               if (re.test(value)) {
                                                                                   resolve()
                                                                               } else if (!re.test(value)) {
                                                                                   resolve(
                                                                                       'Eposta formatı uygun değil!')
                                                                               } else {
                                                                                   resolve(
                                                                                       'Bu alan boş bırakılamaz!')
                                                                               }
                                                                           })
                                                                   }
                                                               })
                        if (email) {
                            const {value: password} = await Swal.fire({
                                                                          title: '3/3 Şifre',
                                                                          input: 'password',
                                                                          inputPlaceholder: 'Şifre giriniz',
                                                                          showCancelButton: true,
                                                                          cancelButtonText: "Vazgeç",
                                                                          confirmButtonText: "Kaydet",
                                                                          allowOutsideClick: false,
                                                                          inputAttributes: {
                                                                              maxlength: 25,
                                                                          },
                                                                          inputValidator: (value) => {
                                                                              return new Promise(
                                                                                  (resolve) => {
                                                                                      if (value != '' && value.length >= 6) {
                                                                                          resolve()
                                                                                      } else {
                                                                                          resolve(
                                                                                              'Şifre 6 karakterden kısa olamaz!')
                                                                                      }
                                                                                  })
                                                                          }
                                                                      })

                            if (password) {
                                let personel = {
                                    id: 0,
                                    username: username,
                                    email: email,
                                    password: password,
                                }
                                addSystemPersonel(personel).then((res) => {
                                    if (res.includes("Error")) {
                                        Swal.fire({
                                                      icon: 'error',
                                                      text: res.split("Error: ")[1],
                                                      confirmButtonText: `Tamam`,
                                                  })
                                    } else {
                                        props.getPersonels()
                                        Swal.fire({
                                                      icon: 'success',
                                                      text: res.split("Success: ")[1],
                                                      confirmButtonText: `Tamam`,
                                                      timer: 2000,
                                                  })
                                    }
                                })
                                // Swal.fire({
                                //               icon: 'success',
                                //               title: 'Sosyal Medya bilgileriniz başarıyla eklendi!',
                                //               showConfirmButton: false,
                                //               timer: 1500
                                //           })
                            } else {
                                Swal.fire({
                                              position: 'center',
                                              icon: 'info',
                                              title: 'İşlemi iptal ettiniz!',
                                              showConfirmButton: false,
                                              timer: 1500
                                          })
                            }

                        } else {
                            Swal.fire({
                                          position: 'center',
                                          icon: 'info',
                                          title: 'İşlemi iptal ettiniz!',
                                          showConfirmButton: false,
                                          timer: 1500
                                      })
                        }
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
                }
            >
                <i className="fas fa-plus"></i> Personel Ekle
            </button>
        </>
    );
}
