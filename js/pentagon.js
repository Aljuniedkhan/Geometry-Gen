document.getElementById('pentagon-button').addEventListener('click',function(){
    const pothem=document.getElementById('pentagon-pothem').value
    const Pothem=parseFloat(pothem);
    const base=document.getElementById('pentagon-base').value
    const Base=parseFloat(base);
    const Area=0.5*Pothem*Base;
    document.getElementById('Area-shown-space-pentagon').innerText=Area;
})