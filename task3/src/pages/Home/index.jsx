import React, { useState, useEffect } from 'react'
import groceryList from '../../services/groceryList'
import _ from 'lodash'

function Home() {
  const [itemList, setItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState({ withVat: 0, withoutVat: 0 });

  const getList = () => {
    groceryList().then(response => {
      setItemList(response.data.data)
      let _itemList = response.data.data;
      getTotalPrice(_itemList);
    })
  }

  useEffect(() => {
    getList();
  }, [])

  const getTotalPrice = (_itemList) => {
    let priceList = [];
    _.map(_itemList, item => {
      priceList.push(item.price)
    })
    let priceWithoutVat = _.reduce(priceList, function (sum, n) {
      return sum + n;
    }, 0);
    let priceWithVat = parseFloat(priceWithoutVat + priceWithoutVat * .15).toFixed(2)
    setTotalPrice({
      withVat: priceWithVat,
      withoutVat: priceWithoutVat
    })
  }

  const getEachItemVat = (price) => {
    return (price * 0.15).toFixed(2)
  }

  const getEachtItemPriceWithVat = (price) => {
    return (parseFloat(price + price * 0.15).toFixed(2))
  }

  const isPriceAbove50 = (price) => {
    return price > 50 ? 'yes' : 'no'
  }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Vat</th>
            <th scope="col">Price with 15% vat</th>
            <th scope="col">Is price above 50</th>
          </tr>
        </thead>
        <tbody>
          {!_.isEmpty(itemList) && itemList.map((item, index) =>
            <tr>

              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{getEachItemVat(item.price)}</td>
              <td>{getEachtItemPriceWithVat(item.price)}</td>
              <td>{isPriceAbove50(item.price)}</td>
            </tr>
          )}
          <tr>
            <td></td>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Price</td>
            <td style={{ fontWeight: 'bold' }}>{totalPrice.withoutVat}</td>
            <td style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Price with vat</td>
            <td style={{ fontWeight: 'bold' }}>{totalPrice.withVat}</td>

          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
