class Method {
    async postLogin(url,body){
        
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify(body)

        })

        let data = response.json()
        return data
    }
}

