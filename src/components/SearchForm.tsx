

import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from 'react-redux';
import { productActions } from '../Redux/slices/Product';

export default function SearchForm() {
    const [userInput, setUerInput] =useState('')
    const dispatch=useDispatch()
    const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUerInput(event.target.value)
        dispatch(productActions.SearchProduct(userInput))
        
    };
  return (
    <div className="searchMargin">
      <TextField
        id="outlined-basic"
        label="Search product here"
        variant="outlined"
        onChange={onchangeHandler}
      />
      <Button variant="contained" color="success" >
        search
      </Button>
    </div>
  );
}
