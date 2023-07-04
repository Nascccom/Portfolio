import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
      <div className={style.contactsBlock}>
          <div className={`${styleContainer.container} ${style.contactsContainer}`}>

              <div className={style.contacts}>
                  <div className={style.contactHead}>
                      <h4>Got Ideas? Feel free to drop me a line</h4>
                      <p>If you have any suggestion, project or even you want to say Hello.. Please fill out the form
                          below and I will reply you shortly.
                      </p>
                  </div>

                  <form id='#contactForm' className={style.contactForm}>
                      <div></div>
                      <div></div>
                      <div className={style.group}>
                          <div className={style.recordBlock50}>
                              <div className={style.formGroup}>
                                  <label className={style.formLabel}>First name</label>
                                  <input className={style.formControl}
                                         name={'name'}
                                         type={"text"}
                                         placeholder={"Name *"}/>
                              </div>
                          </div>
                          <div className={style.recordBlock50}>
                              <div className={style.formGroup}>
                                  <label className={style.formLabel}>Your Email</label>
                                  <input className={style.formControl}
                                         name={'email'}
                                         type={"email"}
                                         placeholder={"E-mail *"}/>
                              </div>
                          </div>
                          <div className={style.recordBlock100}>
                              <div className={style.formGroup}>
                                  <label className={style.formLabel}>Your message</label>
                                  <textarea className={style.formControl}
                                            name="msg"
                                            placeholder={"Message"}>
                                  </textarea>
                              </div>
                          </div>
                          <div className={style.recordBlock100}>
                              <div>
                                  <button className={style.buttonSend}>Send Message</button>
                              </div>
                          </div>
                      </div>

                  </form>
              </div>

          </div>
      </div>
    );
};

