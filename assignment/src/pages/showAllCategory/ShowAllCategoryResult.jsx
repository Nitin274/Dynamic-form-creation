import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import ListOfCreatedCategory from './ListOfCreatedCategory'
import DataOfCreatedCategory from './DataOfCreatedCategory'
import './ShowAllCategoryResult.css'


export default function ShowAllCategoryResult(props) {

  const {handleBackhome} = props
    const [selectedCategoryList, setSelectedCategoryList] = useState('Category1');
    const createdCategoryInRedux = useSelector(state => state.formDataReducer);


    const handleSelectedListItem = (selectedItem ) => {
        setSelectedCategoryList(selectedItem)
    }

  return (
    <div className='showAllCategoryContainer'>
        <ListOfCreatedCategory clickedCategory={selectedCategoryList} handleCategoryList={handleSelectedListItem}/>
        <DataOfCreatedCategory formData = {createdCategoryInRedux[selectedCategoryList]} categoryName = {selectedCategoryList} handleBackhome = {handleBackhome}/>
    </div>
  )
}
