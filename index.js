// donation for flood at noakhali
document.getElementById('donate-btn1')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount1').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Noakhali').innerText)
   
    if(amount1>=0){
    
    const collection=donate+amount1
    document.getElementById('Noakhali').innerText=collection.toFixed(2)
    const totalAmount=amount-amount1
    document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
    document.getElementById('donate-amount1').value=''
    

    }
    else{
        alert('You Can Donate Only Positive')
    }
    
})
// donation for flood  at Feni
document.getElementById('donate-btn2')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount2').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Feni').innerText)
    if(amount1>=0){
        const collection=donate+amount1
        document.getElementById('Feni').innerText=collection.toFixed(2)
        const totalAmount=amount-amount1
        document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
        document.getElementById('donate-amount2').value=''
    }
    else{
        alert('You Can Donate Only Positive')
    }
    
})
// Aid for Injured in the Quota Movement
document.getElementById('donate-btn3')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount3').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Quota').innerText)
    if(amount1>=0){
        const collection=donate+amount1
        document.getElementById('Quota').innerText=collection.toFixed(2)
        const totalAmount=amount-amount1
        document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
        document.getElementById('donate-amount3').value=''
    }
    else{
        alert('You Can Donate Only Positive ')
    }
    
})

// history-tab functionally

 document.getElementById('history-tab')
.addEventListener('click',function(){

    document.getElementById('history-tab').classList.add('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('Donation-tab').classList.remove('bg-[#B4F461]','font-bold','text-black')
    
})
// donation-tab functionally

 document.getElementById('Donation-tab')
.addEventListener('click',function(){

    document.getElementById('Donation-tab').classList.add('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('history-tab').classList.remove('bg-[#B4F461]','font-bold','text-black')
    
})