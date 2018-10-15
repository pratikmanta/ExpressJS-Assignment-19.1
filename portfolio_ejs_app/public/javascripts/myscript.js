$(document).ready(function () {
    // used ajax get method to load file in json format
    $.ajax({
        url: 'javascripts/information.json',
        dataType: 'json',
        type: 'GET',
        success: function (data) {
           
            // assigning variables to get elements by DOM method
            var info1 = document.getElementById("info1")
            var edu1 = document.getElementById("edu1")
            var edu2 = document.getElementById("edu2")
            var edu3 = document.getElementById("edu3")
            var exp1 = document.getElementById("exp1")
            var exp2 = document.getElementById("exp2")
            var skill = document.querySelector("ul")
            var contact = document.getElementById("contact")

            // function to call basic info
            $("#basic_info").ready(function () {
                info1.innerHTML = data[0].bio
                $("#basic_info").click(function () {
                    $("#para1").fadeToggle(500)
                });
            });
            
            // function to get Basic education information
            $("#basic_edu").ready(function () {
                var college1 = data[1].university1;
                var college2 = data[1].university2;
                var college3 = data[1].university3;
                edu1.innerHTML = college1.name + ' ' + college1.state + '<br>' + college1.batch + '<br>' + college1.programme + '<br>'
                edu2.innerHTML = college2.name + ' ' + college2.state + '<br>' + college2.batch + '<br>' + college2.programme + '<br>' + college2.position + '<br>'
                edu3.innerHTML = college3.name + ' ' + college3.state + '<br>' + college3.batch + '<br>' + college3.programme + '<br>' + college3.position + '<br>'   
                $("#basic_edu").click(function () { 
                    $("#para2").fadeToggle(500)
                });
            });

            // function to get Professional Experience information
            $("#prof_exp").ready(function () {
                var prof_exp_1 = data[2].prof_experience1
                var prof_exp_2 = data[2].prof_experience2
                exp1.innerHTML = `${prof_exp_1.designation} , ${prof_exp_1.company} <br> ${prof_exp_1.state}, ${prof_exp_1.duration} <br> ${prof_exp_1.role}`
                exp2.innerHTML = `${prof_exp_2.designation} , ${prof_exp_2.company} <br> ${prof_exp_2.state}, ${prof_exp_2.duration} <br> ${prof_exp_2.role}`
                $("#prof_exp").click(function () { 
                    $("#para3").fadeToggle(500)
                }); 
            });

           
            // Personal Highlights section
            $("#person_high").ready(function() {
                skill.innerHTML = `<li> ${data[3].personality[0]} </li> <li> ${data[3].personality[1]} </li> <li> ${data[3].personality[2]} </li>
                    <li> ${data[3].personality[3]} </li> <li> ${data[3].personality[4]} </li> <li> ${data[3].personality[5]} </li>`
                $("#person_high").click(function(){
                    $("#skill").fadeToggle(500)
                })
            })

            // Contact details section
            $("contact").ready(function() {
                var person_contact = data[4].contact
                contact.innerHTML = `${person_contact.address} <br> ${person_contact.city} <br>
                    ${person_contact.state} <br> ${person_contact.country} <br> ${person_contact.email} <br> ${person_contact.website} <br> ${person_contact.phone}`      
            })
        }
    })
})