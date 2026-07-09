function outerfunction(){
    let name = "kamlesh";
    function innerfunction(){
        // let name = "yadav";
        console.log(name);
    }
    innerfunction();
} 
outerfunction();