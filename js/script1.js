let div = document.querySelector("div")
let ed = document.querySelector(".ed")
let header = document.querySelector("#header")
let years = document.querySelector(".years")
let educ = document.querySelector(".education")
let education = document.querySelector("aside ul .ducation")
let mne = document.querySelector("aside ul")
let experince = document.querySelector(".experince")
let xps = document.querySelector(".xps")
let skls = document.querySelector(".skls")
let crfs = document.querySelector(".crfs")
console.log(window.scrollY)



window.onscroll = () => {
    
    if(window.scrollY > 290){

        header.classList.add("scroll")
    }
        if(window.scrollY > 915 && window.scrollY < 1970){
            education.classList.add("actedu")
            education.firstElementChild.style.color = "#3e64ff"
            
        }else
        {
            education.classList.remove("actedu")
            education.firstElementChild.style.color = "black"
        }
        
        if(window.scrollY > 1970){
            education.classList.remove("actedu")
            education.firstElementChild.style.color = "black"
            xps.classList.add("actedu")
            xps.firstElementChild.style.color = "#3e64ff"
        }
    
    if(window.scrollY < 1970 || window.scrollY >= 2520 ){
        xps.classList.remove("actedu")
        xps.firstElementChild.style.color = "black"
    }
    if(window.scrollY < 290)
    {
        header.classList.remove("scroll")
       
    }
    if(window.scrollY > 2520){

        skls.classList.add("actedu")
        skls.firstElementChild.style.color = "#3e64ff"
    }else{
        skls.classList.remove("actedu")
        skls.firstElementChild.style.color = "black"

    }
    if(window.scrollY >= 3130){
        crfs.classList.add("actedu")
        crfs.firstElementChild.style.color = "#3e64ff"
        skls.classList.remove("actedu")
        skls.firstElementChild.style.color = "black"
    }else{
        crfs.classList.remove("actedu")
        crfs.firstElementChild.style.color = "black"
    }


    
}


function createnewedu(year,bt,st,p) {
    const obj = {};
    obj.year = year;
    obj.bt = bt;
    obj.st = st;
    obj.p = p;
    obj.src= "illustrations/book.svg"
    obj.create = () => {
      let years = document.createElement("div")
      years.classList.add("years")
      let ic = document.createElement("div")
      ic.classList.add("ic")
      let imge = document.createElement("img")
      imge.src = obj.src
      ic.appendChild(imge)

      let theYear = document.createElement("div")
      theYear.classList.add("the-year")
      let yearn = document.createElement("div")
      theYear.appendChild(yearn)
      yearn.classList.add("year-n")
      let a = yearn.textContent = obj.year
      yearn.textContent = a
      
      let bt = document.createElement("div")
      theYear.appendChild(bt)
      let b = bt.textContent = obj.bt
      bt.classList.add("bt")
      let st = document.createElement("div")
      theYear.appendChild(st)
      st.classList.add("st")
      let s = st.textContent = obj.st
      let p = document.createElement("div")
      p.classList.add("p")
      let pp = p.textContent = obj.p
      theYear.appendChild(p)
      let end = document.createElement("div")
      end.classList.add("end")
      theYear.appendChild(end)
      years.appendChild(ic)
      years.appendChild(theYear)
       
      educ.appendChild(years)
        return years
    };
    obj.creatx = () => {
        let years = document.createElement("div")
        years.classList.add("years")
        let ic = document.createElement("div")
        ic.classList.add("ic")
        let imge = document.createElement("img")
        imge.src = obj.src
        ic.appendChild(imge)
  
        let theYear = document.createElement("div")
        theYear.classList.add("the-year")
        let yearn = document.createElement("div")
        theYear.appendChild(yearn)
        yearn.classList.add("year-n")
        let a = yearn.textContent = obj.year
        yearn.textContent = a
        
        let bt = document.createElement("div")
        theYear.appendChild(bt)
        let b = bt.textContent = obj.bt
        bt.classList.add("bt")
        let st = document.createElement("div")
        theYear.appendChild(st)
        st.classList.add("st")
        let s = st.textContent = obj.st
        let p = document.createElement("div")
        p.classList.add("p")
        let pp = p.textContent = obj.p
        theYear.appendChild(p)
        let end = document.createElement("div")
        end.classList.add("end")
        theYear.appendChild(end)
        years.appendChild(ic)
        years.appendChild(theYear)
         
        experince.appendChild(years)
          return years
    }
    return obj;
  }
  const n1 = createnewedu('2017-2018','Hyper Text Markup Language','Youtube',"I learned this language under the supervision of Engineer Osama Mahmoud, and I got Some certificates are certified by large international companies");
n1.create()
  const n2 = createnewedu('2017-2018','Cascading Style Sheets','Youtube',"I learned this language under the supervision of Engineer Osama Mahmoud, and I got Some certificates are certified by large international companies, and I have learnd Sass also");
  n2.create()
  const n3 = createnewedu('2018-2019','JavaScript','Youtube',"I learned this language under the supervision of Engineer Osama Mahmoud, and I got Some certificates are certified by large international companies, and I have learnd Dom and Bom also");
  n3.create()
  const n4 = createnewedu('2019-2020','Vue.Js','Youtube',"I learned this Framework under the supervision of Engineer Osama Mahmoud.");
  n4.create()
  const n5 = createnewedu('2020-2021','Git & GitHub','Youtube',"I learned this control system under the supervision of Engineer Osama Mahmoud.");
  n5.create()

  /* experince */

  const n11 = createnewedu('2018-2019','Web Designer','Freelancer',"HTML , CSS , BOOTSTRAP");
  n11.creatx()
    const n22 = createnewedu('2019-2020','Web Developer','Freelancer',"HTML , CSS , JS , VUE ");
    n22.creatx()
    const n33 = createnewedu('2020-2021','UI/UX Designer','Freelancer',"XD , Photoshop , illustrator");
    n33.creatx()
   
let pProject  = document.getElementById("p-project")
let t  = document.getElementById("t")
