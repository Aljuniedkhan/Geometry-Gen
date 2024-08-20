document.getElementById('rectangle-button').addEventListener('click',function(){
    const width=document.getElementById('rectangle-width').value
    const Width=parseFloat(width);
    const length=document.getElementById('rectangle-length').value
    const Length=parseFloat(length);
    const Area=Width*Length;
    document.getElementById('Area-shown-space-rectangle').innerText=Area;
})