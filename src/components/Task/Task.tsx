import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  //Variáveis de Estado
  const [completado, setCompletado] = useState(false)
  const [tarefa, setTarefa] = useState('')
  
  //Função a ser disparada / Um gatilho (algo a ser analisado)
   /*
   function (){} === () => {}
   */
  useEffect(() => {
    if(completado == true){
      setTarefa("Tarefa Concluída!")
    }
  }, [completado])

  /*
  function concluiTarefa(){
    setCompletado(true)
  }
  */

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: {tarefa}</h3>
        <button onClick={() => {setCompletado(true)}}>Conclua a Tarefa</button>
        {/* <button onClick={concluiTarefa}>Conclua a Tarefa</button> */}
    </div>
  )
}

export default Task