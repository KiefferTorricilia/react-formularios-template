import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../hooks/useForm'

function MainPage() {
  const [formulario, onChangeInput, clear] = useForm({nome: "", idade:"", email: "", profissao: ""})

  

  const handleClick = (event) => {
    event.preventDefault()
    clear()

    console.log(`nome: ${formulario.nome}, idade: ${formulario.idade}, e-mail: ${formulario.email}, Profissão: ${formulario.profissao} `)
    
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
        //O nome tem que ser o mesmo do Estado formulario
          name="nome"
          id="nome"
          value={formulario.nome}
          onChange={onChangeInput}
          type="name"
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name="idade"
          id="idade"
          value={formulario.idade}
          onChange={onChangeInput}
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          id="email"
          value={formulario.email}
          onChange={onChangeInput}
          type="email"
        />
        <label htmlFor="profissao">Profissão:</label>
        <Input
          name="profissao"
          id="profissao"
          value={formulario.profissao}
          onChange={onChangeInput}
          required
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
