import React from 'react'

type Props = {
  id?: string
  labelFor?: string
  labelText?: string
  inputName?: string
  type?: string
  placeholder?: string
}

const InputField = (props: Props) => {
  return (
    <div id={props.id} className="flex flex-col">
      <label htmlFor={props.labelFor} className="capitalize ">{props.labelText}</label>
      <input name={props.inputName} type={props.type} placeholder={props.placeholder} required className="relative text-black w-[250px] h-[40px] outline-none rounded-lg text-xs placeholder:text-xs placeholder:capitalize px-4 py-2 xl:w-[300px] " />
    </div>
  )
}

export default InputField