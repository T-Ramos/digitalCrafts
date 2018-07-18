function buildPage(){
    
    var head = document.createElement("header");
    var title = document.createElement("h1");
    var nav1 = document.createElement("a");
    var nav2 = document.createElement("a");
    head.appendChild(title);
    head.appendChild(nav1);
    head.appendChild(nav2);
    head.setAttribute("style", "background-color: rgb(0, 140, 255); display: flex; flex-direction: row; color: white; height: 120px; margin-left: 18%; margin-right: 10%; margin-top: 3%;");
    title.textContent = "HighOnCoding";
    title.setAttribute("style", "align-self: center; margin-left: 10%; font-size: 50px;");
    nav1.textContent = "Home";
    nav1.setAttribute("style", "align-self: center; margin-left: 25%; font-size: 24px;");
    nav2.textContent = "Categories";
    nav2.setAttribute("style", "align-self: center; margin-left: 10%; font-size: 24px;");
    
    var div1 = document.createElement("div");
    var h2 = document.createElement("h2");
    var p1 = document.createElement("p");
    div1.appendChild(h2);
    div1.appendChild(p1);
    div1.setAttribute("style", "background-color: rgb(218, 218, 218); display: flex; height: 180px; margin-left: 25%; margin-right: 15%; margin-top: 3%; flex-direction: column;");
    h2.textContent = "Curse of the Current Reviews";
    h2.setAttribute("style", "margin-left: 7%; font-size: 30px; color: grey;");
    p1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum inventore maiores repellendus ad, volu dajdf;ladklfdljfl;ajdjf;dak dkfla;dkfjad;jfladjfdaf;djkflajd;lfajdljla;dkfadkfa";
    p1.setAttribute("style", "margin-left: 7%;");
    
    var div2 = document.createElement("div");
    var h3 = document.createElement("h2");
    var p2 = document.createElement("p");
    div2.appendChild(h3);
    div2.appendChild(p2);
    div2.setAttribute("style", "display: flex; height: 180px; margin-left: 25%; margin-right: 15%; margin-top: 3%; flex-direction: column;");
    h3.textContent = "Hello WatchKit";
    h3.setAttribute("style", "color: blue; font-size: 25px;");
    p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis esse vero iste aut alias odit facere, quae praesentium consequatur cupiditate totam aliquam vel. Repudiandae incidunt molestiae dolorum dolore sit.";
    var line1 = document.createElement("div");
    var p3 = document.createElement("p");
    line1.appendChild(p3);
    p3.textContent = "12 comments       124 likes";
    p3.setAttribute("style", "background-color: orange; color: white; margin-left: 25%; margin-right: 15%; margin-top: -4%;")
    
    var div3 = document.createElement("div");
    var h4 = document.createElement("h2");
    var p4 = document.createElement("p");
    div3.appendChild(h4);
    div3.appendChild(p4);
    div3.setAttribute("style", "display: flex; height: 180px; margin-left: 25%; margin-right: 15%; margin-top: 3%; flex-direction: column;");
    h4.textContent = "Introduction to Swift";
    h4.setAttribute("style", "color: blue; font-size: 25px;");
    p4.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur veritatis esse vero iste aut alias odit facere, quae praesentium consequatur cupiditate totam aliquam vel. Repudiandae incidunt molestiae dolorum dolore sit.";
    var line2 = document.createElement("div");
    var p5 = document.createElement("p");
    line2.appendChild(p5);
    p5.textContent = "15 comments       45 likes";
    p5.setAttribute("style", "background-color: orange; color: white; margin-left: 25%; margin-right: 15%; margin-top: -4%;")
    
    
    
    
    
    
    
    
    
    document.body.appendChild(head);
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    document.body.appendChild(line1);
    document.body.appendChild(div3);
    document.body.appendChild(line2);
    

}