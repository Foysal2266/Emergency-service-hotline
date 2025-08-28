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
    console.log('call btn clicked')
    alert('Ringing National Emergency Service 999')
    let coinValue= parseInt(document.getElementById('coin-value').innerText)
   
    if(coinValue===0){
        alert('Insufficient coin.Need at least 20  coin')
        return;
    }
   
   
    // const emergency="National Emergency Service 999"
   
    let coinNewValue=coinValue-20
    document.getElementById('coin-value').innerText=coinNewValue
    
     document.getElementById('history-1').innerText="national"
     
    


    

    


})