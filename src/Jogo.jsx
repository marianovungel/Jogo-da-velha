import React, { useState } from 'react'
import './Jogo.css'

export default function Jogo() {

    const [c1, setC1] = useState(" ")
    const [c2, setC2] = useState(" ")
    const [c3, setC3] = useState(" ")
    const [c4, setC4] = useState(" ")
    const [c5, setC5] = useState(" ")
    const [c6, setC6] = useState(" ")
    const [c7, setC7] = useState(" ")
    const [c8, setC8] = useState(" ")
    const [c9, setC9] = useState(" ")
    const [valor, setValor] = useState("O")
    const [cont, setCont] = useState(0)
    const [vitoriatrue, setVitoriatrue] = useState(false)
    

    const Vitoria = (k)=>{
        
        if((c1 === k && c2 === k && c3 === k) || (c4 === k && c5 === k && c6 === k) || (c7 === k && c8 === k && c9 === k)){
            setVitoriatrue(true)
        }else{
            setVitoriatrue(false) 
        }
        if((c1 === k && c4 === k && c7 === k) || (c2 === k && c5 === k && c8 === k) || (c3 === k && c6 === k && c9 === k)){
            setVitoriatrue(true)
        }else{
            setVitoriatrue(false) 
        }
        if((c1 === k && c5 === k && c9 === k) || (c3 === k && c5 === k && c7 === k)){
            setVitoriatrue(true)
        }else{
            setVitoriatrue(false) 
        }
    }

    const ssetC1 = ()=>{
        setC1(valor)

        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        //trocar o valor

        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
        
    }
    const ssetC2 = ()=>{
        setC2(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC3 = ()=>{
        setC3(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC4 = ()=>{
        setC4(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC5 = ()=>{
        setC5(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC6 = ()=>{
        setC6(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC7 = ()=>{
        setC7(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC8 = ()=>{
        setC8(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }
    const ssetC9 = ()=>{
        setC9(valor)
        //verificar vitória
        if(cont > 4){
            Vitoria(valor)
        }else{
            setCont(cont + 1)
        }
        if(valor === "O"){
            setValor("X")
        }else{
            setValor("O")
        }
    }


  return (
    <div className='contentJogo'>
        <h1 className='jogoDaVelha'>Jogo da Velha...</h1>
        <div className="sectionJogo">
            <div className="line1">
                <span className="Class1 mouse" onClick={ssetC1}>{c1}</span>
                <span className="Class2 mouse" onClick={ssetC2}>{c2}</span>
                <span className="Class3 mouse" onClick={ssetC3}>{c3}</span>
            </div>
            <div className="line1">
                <span className="Class4 mouse" onClick={ssetC4}>{c4}</span>
                <span className="Class5 mouse" onClick={ssetC5}>{c5}</span>
                <span className="Class6 mouse" onClick={ssetC6}>{c6}</span>
            </div>
            <div className="line1">
                <span className="Class7 mouse" onClick={ssetC7}>{c7}</span>
                <span className="Class8 mouse" onClick={ssetC8}>{c8}</span>
                <span className="Class9 mouse" onClick={ssetC9}>{c9}</span>
            </div>
        </div>
        {vitoriatrue && (<h4 className='jogoDaVelhaResulte'>Vitoria do jogador : {valor} </h4>)}
    </div>
  )
}
