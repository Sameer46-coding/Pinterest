var arr = [
    { name: "Car 2", img: "https://i.pinimg.com/736x/d2/6d/2a/d26d2aab2ff63cb48b3a91b0e8e0aa55.jpg" },
    { name: "Car 1", img: "https://i.pinimg.com/474x/b1/67/5a/b1675a8e7b949b8bd0ddf6d9fee0f3c3.jpg" },
    { name: "Car 3", img: "https://i.pinimg.com/474x/d0/5a/76/d05a761342a8c42d625c1b70aae9d460.jpg" },
    { name: "Car 4", img: "https://i.pinimg.com/474x/f8/c9/ea/f8c9eae02b96a4bec22f7da64d41af0d.jpg" },
    { name: "Car 5", img: "https://i.pinimg.com/474x/03/cd/01/03cd01f350ccc80a7a3e32e6500a8143.jpg" },
    { name: "Car 6", img: "https://i.pinimg.com/474x/9e/7d/de/9e7dde37d1b24c7f7e3339b6a34e47a5.jpg" },
    { name: "Car 7", img: "https://i.pinimg.com/474x/38/8e/07/388e071de3c369cf28752ed9d66d7887.jpg" },
    { name: "Car 8", img: "https://i.pinimg.com/474x/64/1c/c3/641cc3a96b96888fd56f0be2a2c52b5c.jpg" },
    { name: "Car 9", img: "https://i.pinimg.com/474x/a2/93/04/a2930422232df90029262440836b27da.jpg" },
    { name : " ", img : "https://i.pinimg.com/474x/fa/8f/88/fa8f8888732fc9b9213d386818dd08ae.jpg"},
    { name : " ", img : "https://i.pinimg.com/736x/de/14/c5/de14c54e3fe99a3f576bd9396517962e.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/0f/a4/5b/0fa45beeac682ababc6bcc60628e7123.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/58/a9/25/58a9252c46d5e3f34d2e044a3f5a6a71.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/32/28/cd/3228cd888c8e5fb42c05426b0be45ebc.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/4b/80/38/4b80380af47575d61f0f345e1385320d.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/6d/bd/d4/6dbdd4fde07776f021ec97678d341907.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/7b/38/8c/7b388c9722843877a240ef4c95de021c.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/ca/20/87/ca2087a016c6b98b02b7dba34fd3e663.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/a8/4c/ca/a84ccad70eefca0d683067c7a6c86655.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/52/ae/81/52ae81f892dcc575e52cc2b04abe3c3d.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/fb/99/0c/fb990c9f4796696a810a03180939b692.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/7f/7d/86/7f7d8675489af3140833e843538997d8.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/e9/1e/ef/e91eef08ef4911f4999a1a44b502b7b8.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/e9/ca/dc/e9cadc91069c1ad964bf05e2faffcec6.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/0f/b7/17/0fb717b4ce24f13bd499e38924f8190d.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/3e/8b/69/3e8b69ec7621de380853111add4a3042.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/36/de/72/36de72b4176ff7be043752e808232866.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/62/a9/86/62a986de8143e94226d9bab801a370ea.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/e5/ee/43/e5ee43d2f5cae924a846656ebf2216da.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/86/dd/a2/86dda219a4559866acc1c7badb6c05d2.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/5d/9f/b8/5d9fb8597ffa438bb96e57923fae40f8.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/2d/db/e6/2ddbe6188a26e2e10154728082995adf.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/65/1b/24/651b2412e2b92b6089fa4bbe59683365.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/b6/ba/aa/b6baaaf4eb2e9746e2559b880ab8dd8c.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/80/3f/96/803f96b1e8b8cb7d4609c0c321d718ed.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/27/db/ad/27dbadc1af463bbb4017e860e1044ae9.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/64/ac/2f/64ac2fc3590f78cca422774629c23867.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/96/54/8c/96548ce1b61b22a6b6501c78821afddf.jpg"},
    { name : " ", img : "https://i.pinimg.com/474x/b2/81/51/b28151c403a915e9e669c07431809fca.jpg"},
    { name : " ", img : ""},
];

function pic(){
        var clutter = "";
        arr.forEach(function(obj){
            clutter += `<div class="box">
       <img class="cursor-pointer" src="${obj.img}">
       <div class="caption">${obj.name}</div>
       </div>`;
        });
        document.querySelector(".container").innerHTML = clutter;
    }
    
    function black(){
       document.querySelector("#searchinput").addEventListener("focus",function(){
            document.querySelector(".overlay").style.display = "block";
       })
    }

    function white(){
        document.querySelector("#searchinput").addEventListener("blur",function(){
             document.querySelector(".overlay").style.display = "none";
        })
     }
    
    pic();
    black();
    white();