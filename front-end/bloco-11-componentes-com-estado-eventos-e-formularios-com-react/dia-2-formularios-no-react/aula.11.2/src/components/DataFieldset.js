import {Component} from 'react';
import PropTypes from "prop-types";


class DataFieldset extends Component {
    render (){
        const {anecdote, handleChange} = this.props
        return (
          <fieldset>
            <legend>Texto e arquivos</legend>
            <label htmlFor="anecdote">
              Anedota:
              <textarea
                id="anecdote"
                name="anecdote"
                onChange={handleChange}
                value={anecdote}
              />
              { !anecdote.length ? ' -campo vazio- ' : ' -ok- '}
            </label>
            <label>
              Adicione os arquivos extras
              <input type="file" />
            </label>
          </fieldset>
            )
    }
}
DataFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  anecdote: PropTypes.string.isRequired,
};

export default DataFieldset;