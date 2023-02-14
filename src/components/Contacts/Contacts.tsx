import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contacts = () => {
    return (
      <div className={style.contactsBlock}>
          <div className={`${styleContainer.container} ${style.contactsContainer}`}>
              <h1>Contacts</h1>
              <form className={style.form}>
                  <div className={style.inputFields}>
                      <div>
                          <span></span>
                          <input/>
                      </div>
                      <div>
                          <span></span>
                          <input/>
                      </div>
                      <div>
                          <span></span>
                          <textarea name="" id=""></textarea>
                      </div>
                  </div>
                  <button>Send</button>
              </form>
          </div>
      </div>
    );
};

