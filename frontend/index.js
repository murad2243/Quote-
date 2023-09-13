let output = document.getElementById("output")
// output.append("cjel")
console.log('checking');
    function getJoke(){
        output.append("Loading")
        const input = document.getElementById("input").value;
        console.log(input);
        // output.innerText="skl"
        fetch("http://localhost:8080/joke",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                keyword: input
            })
        }).then((res)=> res.json()).then((data)=>{
            console.log(data);
            output.innerHTML=null;
            // let joke = 
            output.append(data.jokes)
        }).catch((err)=>{
            output.innerHTML=null;
            output.append("Something went wrong")
            console.log(err);
        })

    }