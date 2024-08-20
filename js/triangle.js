document.getElementById('triangle-button').addEventListener('click',function(){
    const base=document.getElementById('triangle-base').value
    const Base=parseFloat(base);
    const height=document.getElementById('triangle-height').value
    const Height=parseFloat(height);
    const Area=0.5*Base*Height;
    document.getElementById('Area-shown-space-traingle').innerText=Area;
})