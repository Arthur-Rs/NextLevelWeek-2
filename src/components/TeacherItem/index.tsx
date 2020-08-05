import React from 'react';

// => CSS
import './styles.css'

// => Imagens
import Whatsapp from '../../assets/images/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/35051903?s=460&u=e57b91a0c1d281d3ebaaaf623e5e48be7fa61c02&v=4" alt="Arthur Reis" />
        <div>
          <strong>Arthur Reis</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Professor de Física Qualificado pela Universidade De João Paulo Segundo
            <br />
            Responsável por mandar o homem a lua em um sonho!
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 20,00</strong>
        </p>

        <button type="button">
          <img src={Whatsapp} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;