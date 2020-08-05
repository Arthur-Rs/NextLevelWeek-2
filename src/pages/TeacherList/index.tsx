import React from 'react';

// => CSS
import './styles.css'

// => Components
import Header from '../../components/Header'
import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da semana</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" id="subject" />
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;