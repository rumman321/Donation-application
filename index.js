// donation for flood at noakhali
document.getElementById('donate-btn1')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount1').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Noakhali').innerText)
   
    if(amount1>0 && amount1 <= amount){
    
    const collection=donate+amount1
    document.getElementById('Noakhali').innerText=collection.toFixed(2)
    const totalAmount=amount-amount1
    document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
    document.getElementById('donate-amount1').value=''
    my_modal_1.showModal()

           // history item
           const historyItem=document.createElement('div')
           historyItem.className="bg-white p-3 rounded-xl  border-1 border-red-500"
           historyItem.innerHTML=`
           <p class="text-2xl text-black font-bold"> ${amount1.toFixed(2)} tk Donate for Flood at Noakhali, Bangladesh</p>
           <p class="text-xl text-black">${new Date().toLocaleDateString()}</p>
           `
           document.getElementById('history-list').appendChild(historyItem)
    

    }
    else{
        alert('Invalid Input or Insufficient Balance')
    }
    
})
// donation for flood  at Feni
document.getElementById('donate-btn2')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount2').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Feni').innerText)
    if(amount1>0 && amount1 <= amount){
        const collection=donate+amount1
        document.getElementById('Feni').innerText=collection.toFixed(2)
        const totalAmount=amount-amount1
        document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
        document.getElementById('donate-amount2').value=''
        my_modal_1.showModal()
        // history item
        const historyItem=document.createElement('div')
        historyItem.className="bg-white p-3 rounded-xl  border-1 border-red-500"
        historyItem.innerHTML=`
        <p class="text-2xl text-black font-bold"> ${amount1.toFixed(2)} tk Donate for Flood at Feni, Bangladesh</p>
        <p class="text-xl text-black">${new Date().toLocaleDateString()}</p>
        `
        document.getElementById('history-list').appendChild(historyItem)
    }
    else{
        alert('Invalid Input or Insufficient Balance')
    }
    
})
// Aid for Injured in the Quota Movement
document.getElementById('donate-btn3')
.addEventListener('click',function(){
    const amount1=parseFloat(document.getElementById('donate-amount3').value)
    const amount=parseFloat(document.getElementById('total-donation').innerText)
    const donate=parseFloat(document.getElementById('Quota').innerText)
    if(amount1>0 && amount1 <= amount){
        const collection=donate+amount1
        document.getElementById('Quota').innerText=collection.toFixed(2)
        const totalAmount=amount-amount1
        document.getElementById('total-donation').innerText=totalAmount.toFixed(2)
        document.getElementById('donate-amount3').value=''
        my_modal_1.showModal()
        // history item
        const historyItem=document.createElement('div')
        historyItem.className="bg-white p-3 rounded-xl  border-1 border-red-500"
        historyItem.innerHTML=`
        <p class="text-2xl text-black font-bold"> ${amount1.toFixed(2)} tk Donate for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-xl text-black">${new Date().toLocaleDateString()}</p>
        `
        document.getElementById('history-list').appendChild(historyItem)
    }
    else{
        alert('Invalid Input or Insufficient Balance')
    }
    
})

// history-tab functionally

 document.getElementById('history-tab')
.addEventListener('click',function(){

    document.getElementById('history-tab').classList.add('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('Donation-tab').classList.remove('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('donation-body').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    
    
    
})
// donation-tab functionally

 document.getElementById('Donation-tab')
.addEventListener('click',function(){

    document.getElementById('Donation-tab').classList.add('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('history-tab').classList.remove('bg-[#B4F461]','font-bold','text-black')
    document.getElementById('donation-body').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    
    
})