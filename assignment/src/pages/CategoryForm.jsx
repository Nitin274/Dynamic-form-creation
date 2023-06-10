import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './CategoryForm.css'
import { addFormData } from '../store/action'
export default function CategoryForm(props) {
  const {name } = props

  const stateCategoryData = useSelector(state => state.formDataReducer)

  const dispatch = useDispatch()

  const [inputFieldsData, setInputFieldData] = useState({
    fieldName: '',
    placeholder: '',
    isRequired: false
  })


  const handleChange = (e) => {
     const id = e.target.id;
     const value = e?.target?.value
     
     if(id === 'fieldName')
     {
        setInputFieldData(prev => ({
            ...prev,
            fieldName: value
        }))
     }
     else if(id === 'fieldPlaceholder') {
        setInputFieldData(prev => ({
            ...prev,
            placeholder: value
        }))
     }

     else {
        const checkAble = e.target.checked
        setInputFieldData(prev => ({
            ...prev,
            isRequired: checkAble
        }))
     }

  }

  const handleClick = () => {
    const stateKeys  = Object.keys(stateCategoryData) || []


    let result = {}

    if(stateKeys.includes(name))
    {
        const stateData = [...stateCategoryData[name]]

        stateData.push(inputFieldsData)

        result[name] = stateData
    }
    else {
        result[name] = [inputFieldsData]
    }
    dispatch(addFormData(result))

    setInputFieldData({
        fieldName: '',
        placeholder: '',
        isRequired: false
    })

    alert('Data Saved in State Successfully')
  }


  return (
    <div className='categoryFormContainer'>
        <div className='categoryForm'>
        <h4 className='categoryHeading'>{name}</h4>
        <div className='categoryFormData'>
            <div className='labelInputClass'>
            <label className='labelClass' htmlFor='fieldName'>Enter Field Name</label>
            <input className = 'inputClass' type='text' placeholder='Enter Field Name' id='fieldName' value = {inputFieldsData.fieldName}onChange={handleChange}/>
            </div>
            <div className='labelInputClass'>
            <label className='labelClass' htmlFor='fieldPlaceholder'>Enter Field placeholder</label>
            <input className = 'inputClass'  type='text' id = 'fieldPlaceholder' placeholder='Enter placeholder for field' value = {inputFieldsData.placeholder} onChange={handleChange}/>
            </div>
            <div className='labelInputClass'>
            <label className='labelClass' htmlFor='fieldPlaceholder'>Required Field?</label>
            <input
                type="checkbox"
                name={ name }
                id={ 'isRequiredField' }
                className='checkbox'
                onChange={handleChange}
                checked={inputFieldsData.isRequired}
            />
            </div>
        </div>
        <button className = 'submitButton'onClick={handleClick}>Submit Field Data</button>
        </div>
    </div>
  )
}
