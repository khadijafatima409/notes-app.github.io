var btn1=document.querySelector(".add1")
btn1.addEventListener("click",()=>{
    addnote()
})     
n=0

function addnote(){

    n++;
    console.log(n)
    var list=localStorage.getItem("item")
    localStorage.setItem("item",JSON.stringify(list))


console.log(list)
    if(list)
    {
        list=JSON.parse(list)
    }
    else
    {
        list=[]
    }    
    

    localStorage.setItem("item",JSON.stringify(list))


    var notes=document.createElement("div")
    document.body.appendChild(notes)
    notes.setAttribute('data-key',`${n}`)
    notes.className="notes"
    notes.innerHTML=`
    <div class="head">
        <i class="far fa-save save"></i>
        <i class="fas fa-edit edt"></i>
        <i class="far fa-trash-alt del"></i>
    </div>
    <textarea name="" id="" cols="30" rows="10" class="text"></textarea>
`



    let delbtn=document.querySelectorAll(".del")
    // console.log(delbtn)
    delbtn.forEach(e=>{
        e.onclick=(x)=>{
            var not=x.target.parentElement.parentElement
            console.log(not)
            not.remove()
        }
    })
    
  
    var save=document.querySelectorAll(".save")
    // console.log(save)
    save.forEach(element => {
        // console.log(element)
        element.onclick=(x)=>{
            var not=x.target.parentElement.parentElement
            // console.log(not)
            // not.remove()
                var head=not.querySelector(".head")
                var text=not.querySelector(".text")
                // console.log(text);
                
                text.toggleAttribute("disabled")


                // text.classList.toggle("opac")  
                // var opac=document.querySelector('.opac')
                // console.log(opac,"opac")
                // var val=text.value
                // console.log(val,"value")
        }
    });



    

}
































































































//         let delBtn = document.querySelectorAll('.del');
//     console.log(delBtn);
    
//     delBtn.forEach((btn)=>{
//         btn.addEventListener("click",delNote);
//     })
// }
// function delNote(e){
//     let note = e.target.parentElement.parentElement;
//     // console.log(note);
    
//     note.remove();
    
//  }