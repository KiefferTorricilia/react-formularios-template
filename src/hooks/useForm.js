import { useState } from "react"

export default function useForm(initialState){
    const [formulario, setFormulario] = useState(initialState)

    const onChangeInput = (e) => {
        const {name, value} = e.target
        console.log(e.target)
        setFormulario({...formulario, [name]: value})
        console.log(formulario)
      }

      const clear = () => {
        setFormulario(initialState)
      }
    

    return [formulario, onChangeInput, clear]
}