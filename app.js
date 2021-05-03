window.addEventListener('load',()=>{
    let temperatureDegree=document.querySelector('.temparature-degree')
    let temperatureDescription=document.querySelector('.temparature-description')
    let locationTimezone=document.querySelector('.location-timezone')
    let wheathericon=document.querySelector('.icon1')
    let temparature=document.querySelector('.degree-section')
    let temparaturespan=document.querySelector('.degree-section span')
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            long = position.coords.longitude;
            lat =position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=8fa8aaaf802f6074bd4782382ca73393`
            fetch(api).then((response) =>{
                return response.json()
            }).then((data) =>{
                console.log(data)
                const {temp}=data.main
                const {name}=data
                const {country}=data.sys
                const {description}=data.weather[0]
                const {icon}=data.weather[0]
                temperatureDegree.textContent=temp
                locationTimezone.textContent=name+','+country
                temperatureDescription.textContent=description
                wheathericon.src =` http://openweathermap.org/img/wn/${icon}@2x.png`
                temparature.addEventListener('click',() =>{
                    if(temparaturespan.textContent === 'F'){
                        temperatureDegree.textContent=Math.floor((temp-32)*(5/9))
                        temparaturespan.textContent = 'C'
                    }
                    else
                    {
                        temperatureDegree.textContent = temp
                        temparaturespan.textContent = 'F'
                    }
                })
            })
        
        })
    }
    
})