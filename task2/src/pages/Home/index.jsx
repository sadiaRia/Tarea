import React, { useState, useEffect } from 'react'
import url from '../../services/url'
import _ from 'lodash'

function Home() {
  const [serachItem, setserachItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const setFiledOnChange = (e) => {
    setserachItem(e.target.value);
  }

  useEffect(() => {
    if (!serachItem) {
      movieList('iron');
    }
  }, [])

  const movieList = (searchItem) => {
    url(searchItem).then(response => {
      setItemList(response.data.Search)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    movieList(serachItem);
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-10">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={setFiledOnChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit}>Search</button>
        </div>
      </div>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-8" style={{ textAlign: 'center' }}>
          Sharing a few of our favourite movies :)
      </div>
        <div className="col-2"></div>
      </div>

      <div className="row"><br /></div>

      <div className="row">

        {_.isEmpty(itemList) && <div>SORRY!! No content found</div>}

        {!_.isEmpty(itemList) && itemList.map(item =>
          <div className="col-4">
            <div class="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center' }}>{item.Title}</h5>
                <img src={item.Poster} className="card-img-top" />
                <p className="card-text" style={{ textAlign: 'center' }}>[{item.Year}]</p>
              </div>
            </div>
          </div>)}
      </div>

    </div>
  )
}

export default Home
