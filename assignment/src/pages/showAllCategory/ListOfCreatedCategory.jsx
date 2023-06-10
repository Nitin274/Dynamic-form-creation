import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import './ListOfCreatedCategory.css'
import classNames from 'classnames'

export default function ListOfCreatedCategory(props) {

    const { clickedCategory, handleCategoryList} = props

    const createdCategoryInRedux = useSelector(state => state.formDataReducer)

    const [selectedCategory, setSelectedCategory] = useState(clickedCategory)

    const categoryList = Object.keys(createdCategoryInRedux)

    const handleListClick = (categories) => {
        handleCategoryList(categories)
        setSelectedCategory(categories)
    }

  return (
    <div className='categoryListContainer'>
        {
           categoryList.map((categories) => 
           (
            <div className = { classNames('categoryList', selectedCategory === categories ? 'selectedCategoryClass' : '' )}key = {categories } onClick = {() => handleListClick(categories)}>
               <span className='listText'>{categories}</span>
            </div>
           ))
        }
    </div>
  )
}
