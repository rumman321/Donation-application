// donation for flood at noakhali
document.getElementById('donate-btn1')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount1').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const totalAmount=amount+amount1
    document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
    document.getElementById('donate-amount1').value=''
    
})
// donation for flood  at Feni
document.getElementById('donate-btn2')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount2').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const totalAmount=amount+amount1
    document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
    document.getElementById('donate-amount2').value=''
    
})
// Aid for Injured in the Quota Movement
document.getElementById('donate-btn3')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount3').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const totalAmount=amount+amount1
    document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
    document.getElementById('donate-amount3').value=''
    
})