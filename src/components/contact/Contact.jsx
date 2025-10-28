import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

function Contact(){

const formRef = useRef();
const [ShowPopUp, setShowPop] = useState(false)

const sendMsg = (e) => {
  e.preventDefault();

  emailjs.sendForm(
  'service_g3d21y3',
  'template_az5w3qn',
  formRef.current,
  'ffL3cFuL1MzyukCHo'
  ).then(() => {
    e.target.reset();
    setShowPop(true)
    setTimeout(() => setShowPop(false), 2000);
  })
  .catch((error) => {
  console.error("Erro ao enviar:", error.text || error);
  });
};

return(

      <section className="contact" id="contact">

          <h2>
              Entre em <span className='highlight'>Contato</span>
          </h2>

          <form ref={formRef} onSubmit={sendMsg}>

              <div className="form-group">

                  <div className="input-group">
                    <input placeholder='Nome e sobrenome' type="text" name='name' required/>
                    <input placeholder='Email' type="email" name='email' required/>  
                    <input placeholder='Assunto' type="text" name='subject'/>                 
                  </div>

                  <textarea placeholder='Digite sua mensagem aqui...' name="message" rows="5" required></textarea>
              </div>

              <button className='btn-send-email' type='submit'>
                  Enviar
              </button>
          </form>
 
          {ShowPopUp && (
            <div className="popup">
              <p>
                Mensagem enviada com sucesso!
              </p>
            </div>
          )
          }

      </section>

)

}

export default Contact;