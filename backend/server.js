import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

let stateMachine = {
    temperature: 25,
    rpm: 1000,
    status: "STOPPED",
    levelTank: 70,
    alarm: false 
}

setInterval(() => {
    if(stateMachine.status == "RUNNING"){
        
        stateMachine.levelTank -= Math.random() * 1
        stateMachine.temperature += Math.random() * 2 - 0.5 // varia entre -0.5 e 1.5 fazendo a temperatura baixar/aumentar aos poucos
        stateMachine.rpm +=  Math.random() * 50 - 25 // varia entre -25 e 25
        
        
        stateMachine.levelTank = Math.max(0, stateMachine.levelTank)
        stateMachine.temperature = Math.max(20, Math.min(120, stateMachine.temperature))
        stateMachine.rpm = Math.max(0, Math.min(3000, stateMachine.rpm))
        stateMachine.alarm = stateMachine.temperature > 90
    }
}, 1000 ) // 1000ms = 1s | atualiza a cada 1s


app.post('/api/start', (req, res) =>{
    stateMachine.status = "RUNNING"
    return res.json({message: "Máquina ligada!"})
})

app.post('/api/stop', (req, res) => {
    stateMachine.status = "STOPPED"
    stateMachine.rpm = 0
    return res.json({message: "Máquina desligada!"})
})

app.post('/api/alarm-reset', (req, res) => {
    stateMachine.alarm = false;
    return res.json({message: "Alarme desligado!"})
})

app.get('/api/status', (req, res) =>{
    return res.json(stateMachine)
})


app.listen(PORT, ()=>{
    console.log(`Está rodando em http://localhost:${PORT}`)
})