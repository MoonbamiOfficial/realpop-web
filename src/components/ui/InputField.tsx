import React from 'react'

type Props = {
  htmlFor?: string
  labelText?: string
  id?: string
  type?: string
  name?: string
  placeholder?: string
}

const InputField = (props: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.htmlFor} className="capitalize cursor-pointer ">{props.labelText}</label>
      <input id={props.id} type={props.type} name={props.name} placeholder={props.placeholder} required autoComplete='true' className="relative text-black w-[250px] h-[40px] outline-none rounded-lg text-xs placeholder:text-xs placeholder:capitalize px-4 py-2 xl:w-[300px] " />
    </div>
  )
}

export default InputField