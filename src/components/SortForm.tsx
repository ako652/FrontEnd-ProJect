import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { productActions } from '../Redux/slices/Product';


export default function SortForm() {
    const [selectItem , setSelectItem]=useState('')

    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectItem(event.target.value as string);
    };

    const dispatch=useDispatch()

    if (selectItem==='LowestPrice'){
        dispatch(productActions.sortProductLowestPrice())
    }
    if (selectItem==='HighestPrice'){
        dispatch(productActions.sortProductHighestPrice())
    }
    if(selectItem==='AZ'){
        dispatch(productActions.sortProductAZ())
    }
    if(selectItem==='ZA'){
        dispatch(productActions.sortProductZA())
    }

  return (
    <div>
      <form >
        <select  onChange={onChangeHandler}>
            <option value="">choose from</option>
          <option value="LowestPrice">Lowest Price</option>
          <option value="HighestPrice">Highest Price</option>
          <option value="AZ">AZ</option>
          <option value="ZA">ZA</option>
        </select>
      </form>
    </div>
  );
}
