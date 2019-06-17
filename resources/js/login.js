const { JSDOM } = require('jsdom')
const { window } = new JSDOM()
const { document } = (new JSDOM('')).window
global.document = document
var $ = jQuery = require('jquery')(window)
const util = require('util')
const shajs = require('sha.js')
var url = 'https://raw.githubusercontent.com/TeaTeam/VFConnect/master/resources/json/users.json'
// var users = [
//     {
//         name : "admin",
//         pass : "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918"
//     },
//     {
//         name : "guest",
//         pass : "84983c60f7daadc1cb8698621f802c0d9f9a3c3c295c810748fb048115c186ec"
//     },
//     {
//         name : "anon",
//         pass : "5430eeed859cad61d925097ec4f532461ccf1ab6b9802b09a313be1478a4d614"
//     },
//     {
//         name : "camilo",
//         pass : "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"
//     }
// ]

var users = []

function loadJson(){
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType){
            xhr.overrideMimeType("application/json")
        }
      }
    })
    $.getJSON(url, function(json){
        var toPrintJson = JSON.stringify(json)
        console.log(Object.keys(JSON.parse(toPrintJson.toString())).length)
        //console.log(util.inspect(JSON.parse(toPrintJson.toString()), { colors: true }))
        // $.each(JSON.parse(toPrintJson.toString()), function(i,item){
        //     //console.log(item)
        //     users.push(item)
        // })
        users.push(JSON.parse(toPrintJson.toString()))
    })
    return console.log(users)
}
loadJson()

function validate(form){
    try{
        var exists = false
        var result = shajs('sha256').update(form.pwd.value).digest('hex')
        users.forEach((e)=>{
            if(form.usr.value==e.name&&result==e.pass)
                return exists=true, alert('This should redirect to another HTML')
        })
        if(!exists)
            alert('Wrong credentials')
    }catch(error){
        alert(error)
        console.error(error)
    }
}