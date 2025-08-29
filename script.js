document.getElementById('heart-icon').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon2').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon3').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon4').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon5').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon6').addEventListener('click',function(e){
    e.preventDefault()

    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon7').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon8').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})
document.getElementById('heart-icon9').addEventListener('click',function(e){
    e.preventDefault()
    
    let heartValue=parseInt(document.getElementById('heart-value').innerText)
    let heartNewValue=heartValue+1
    document.getElementById('heart-value').innerText=heartNewValue

})

// call button
document.getElementById('call-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing National Emergency Service 999')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-1').innerText="National Emergency Service 999"
     
})
document.getElementById('call-btn2').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Police Helpline Number 999')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-2').innerText="Police Helpline Number 999"
     
})
document.getElementById('call-btn3').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Fire Service Number 999')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-3').innerText="Fire Service Number 999"
     
})
document.getElementById('call-btn4').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Ambulance Service 1994-999999')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-4').innerText="Ambulance Service 1994-999999s"
     
})
document.getElementById('call-btn5').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Women & Child Helpline 109')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-5').innerText="Women & Child Helpline 109"
     
})
document.getElementById('call-btn6').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Anti-Corruption Helpline 106')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-6').innerText="Anti-Corruption Helpline 106"
     
})
document.getElementById('call-btn7').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Electricity Helpline 16216')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-7').innerText="Electricity Helpline 16216"
     
})
document.getElementById('call-btn8').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Brac Helpline 16445')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-8').innerText=" Brac Helpline 16445"
     
})
document.getElementById('call-btn9').addEventListener('click',function(e){
    e.preventDefault()
    
    alert('Ringing Bangladesh Railway Helpline 163')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
     let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-9').innerText="Bangladesh Railway Helpline 163"
     
})


// clear btn
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-1').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-2').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-3').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-4').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-5').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-6').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-7').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-8').style.display='none'
})
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-9').style.display='none'
})

// display block section

document.getElementById('call-btn').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-1').style.display='block'
})
document.getElementById('call-btn2').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-2').style.display='block'
})
document.getElementById('call-btn3').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-3').style.display='block'
})
document.getElementById('call-btn4').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-4').style.display='block'
})
document.getElementById('call-btn5').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-5').style.display='block'
})
document.getElementById('call-btn6').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-6').style.display='block'
})
document.getElementById('call-btn7').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-7').style.display='block'
})
document.getElementById('call-btn8').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-8').style.display='block'
})
document.getElementById('call-btn9').addEventListener('click',function(e){
    e.preventDefault()
    document.getElementById('history-9').style.display='block'
})



















































