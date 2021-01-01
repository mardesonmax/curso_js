import React from 'react';

import PropTypes from 'prop-types';

import './Tarefas.css';

import { FaEdit, FaWindowClose } from 'react-icons/fa';

const Tarefas = (props) => {
  const { tarefas, handleEdit, handleDelete } = props;

  return (
    <ul className="tarefas">
      {tarefas.length > 0 ? tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="btn edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              className="btn delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      )) : <h4>Não encotramos nenhuma tarefa</h4>}
    </ul>
  );
};

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Tarefas;
