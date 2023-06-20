import React, { useEffect, useState } from 'react'
import {getName, filterTypes, getTypes, orderPoke, getPokemon} from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SearchBar.module.css'

const SearchBar = ({setOrderName, setCreated, setType}) => {

  const [currentPage, setCurrentPage] = useState(1);

    const types = useSelector(state => state.allTypes)
    const [name, setName] = useState('')
    
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getTypes())
    }, [])

    const handleInputChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleChangeTypes = (e) => {
      dispatch(filterTypes(e.target.value))
      setType(e.target.value)
      setOrderName(e.target.value)
      setCurrentPage(1)
    }

    const handleOrderName = (e) => {
      dispatch(orderPoke(e.target.value))
      setOrderName(e.target.value)
    }

    const handlerCreated = (e) => {
      dispatch(getPokemon(e.target.value))
      setType('all')
      setCreated(e.target.value)
      setOrderName(e.target.value)
      setCurrentPage(1)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const formattedName = name.toLowerCase(); // Convertir el nombre a minúsculas
      dispatch(getName(formattedName));
      setCurrentPage(1);
      setName('');
    };

  return (
        <div className={styles.searchBarContainer}>
          <div className={styles.search_name}>
          <input
  className={styles.search_input}
  onChange={handleInputChange}
  value={name}
  type="text"
  placeholder="Name pokemon"
/>

<input
  className={styles.search_button}
  type="submit"
  onClick={handleSubmit}
  value="Buscar"
  
/>
          </div>
  
          <div className={styles.filters}>
            <label htmlFor="">Filtrar por: </label>
              <select
              onChange={e => handleChangeTypes(e)}
              >
                <option value='all'>-- Tipos de Pokemóns --</option>
                {types?.map((type) => {
                  return (
                  <option key={type.id} value={type.name}>{type.name}</option>)
                })}
            </select>
          </div>
  
          <div className={styles.filters}>
            <label htmlFor="">Buscar por origen: </label>
            <select onChange={e => handlerCreated(e)}>
              <option value="api">API</option>
              <option value="db">DB</option>
            </select>
          </div>
  
          <div className={styles.filters}>
            <label htmlFor="order">Ordenar por: </label>
            <select
              onChange={e => handleOrderName(e)}
            >
              <option value="name_desc">A-Z</option>
              <option value="name_asc">Z-A</option>
            </select>
          </div>
      </div>
    )
  }

  

export default SearchBar;