import React, { useState } from 'react'
import CategoryForm from './CategoryForm'
import {useSelector} from 'react-redux'
import './CategoryGenerator.css'
import ShowAllCategoryResult from './showAllCategory/ShowAllCategoryResult'

export default function CategoryGenerator() {
    const [categoryArray, setcategoryArray] = useState(['Category1'])

    const stateData = useSelector(state => state.formDataReducer)

    const [showAllCategory,setShowAllCategory] = useState(false)

    const handleClick = () => {
         const categoryData = [...categoryArray];
         
         const categoryArrayLength = categoryData.length-1;

         const getValue = Number(categoryData[categoryArrayLength][8]);

         const newCategory = `Category${getValue+1}`

         categoryData.push(newCategory)

         setcategoryArray(categoryData)
    }

    const handleShowAllCategoy = () => {
       const keys = Object.keys(stateData) || [];

       if(keys.length > 0)
       {
        setShowAllCategory(true)
       }
       else if(keys.length === 0)
       {
        alert('Please Enter At least one Field in Category')
       }
    }

    const handleBackhome = () => {
      setShowAllCategory(false);
    }

    
  return (
    <section className=''>
      { showAllCategory ? <ShowAllCategoryResult handleBackhome = { handleBackhome }/>
      : 
      <div className='categoryGeneratorContainer'>
        <h1 className='categoryHeading'>Generate Category form</h1>
        <button className='addCategoryButton' onClick={handleClick} >Add Category</button>
        <div className='categoryList'>
        {
        categoryArray.map((category, index) => <CategoryForm  key = {category[index]} name = {category}/>)
        }
        </div> 
        <button className='showAllCategoryButton' onClick={handleShowAllCategoy}>Show All Category Result</button>
        </div>
  }
    </section>
  )
}
