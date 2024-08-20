document.getElementById('ellipse-button').addEventListener('click',function(){
    const base=document.getElementById('ellipse-base').value
    const Base=parseFloat(base);
    const height=document.getElementById('ellipse-height').value
    const Height=parseFloat(height);
    const Area=3.1416*Base*Height;
    document.getElementById('Area-shown-space-ellipse').innerText=Area;
})