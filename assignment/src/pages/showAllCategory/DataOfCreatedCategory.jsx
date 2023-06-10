import React from 'react'
import './DataOfCreatedCategory.css'

export default function DataOfCreatedCategory(props) {

    const { formData, categoryName, handleBackhome} = props

    const handleChange = (e) => {
        console.log(e.target.id,e.target.value)
    }

    const handleSubmitClick = () => {
        console.log('abc')
    }


  return (
    <div className='createdCategoyContainer'>
        <h1 className='categoryHeading'>{categoryName}</h1>
        <form>
        <div className='createdCategoyClass'>
         {
            formData.map(data => {
               const {fieldName, placeholder,isRequired} = data
               return(
                 <div className='labelInputClass' key = {fieldName}>
                    <label className='labelClass' htmlFor={fieldName}>
                         {fieldName}
                    </label>
                    <input  className='inputClass' type= 'text' id = {fieldName} onChange = {handleChange} placeholder={placeholder} required={isRequired}/>
                </div>
               )
           })
         }
         </div>
          <div className='buttons'>
          <input type ='button' value = 'Submit Data' className='SubmitButton' onClick={handleSubmitClick}/>
          <button className='backHome' onClick={handleBackhome}>Back to home page</button>
          </div>
         </form>
    </div>
  )
}
