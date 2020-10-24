$(document).ready(function() {

	var attachFastClick = Origami.fastclick;
	attachFastClick(document.body);

var Bouton_Fair = document.getElementById("btn--fair"),
    Bouton_Self = document.getElementById("btn--self"),
    Bouton_Common = document.getElementById("btn--common"),
    Bouton_Share = document.getElementById("btn--share"),
    Bouton_Back = document.getElementById("btn--back"),
    Bouton_Home = document.getElementById("btn--home"),
    Bouton_Submit = document.getElementById("btn--submit"),
    Box_Chloe = document.getElementById("btn--chloe"),
    Box_Alois = document.getElementById("btn--alois"),
    Box_Mahault = document.getElementById("btn--mahault"),
    Box_AnneSophie = document.getElementById("btn--annesophie"),
    Total_Chloe = 0,
    Total_Alois = 0,
    Total_Mahault = 0,
    Total_AnneSophie = 0,
    Ecran_Repartition_1 = document.getElementsByClassName("screen--repartition_1")[0],
    Ecran_Chacun = document.getElementsByClassName("screen--chacun")[0],
    Ecran_Repartition_2 = document.getElementsByClassName("screen--repartition_2")[0],
    Ecran_Share = document.getElementsByClassName("screen--share")[0],
    Ecran_Chloe = document.getElementsByClassName("screen--chloe")[0],
    Ecran_Alois = document.getElementsByClassName("screen--alois")[0],
    Ecran_Mahault = document.getElementsByClassName("screen--mahault")[0],
    Ecran_AnneSophie = document.getElementsByClassName("screen--annesophie")[0];

/******** ON DIVISE L'ADDITION ********/

/*** Accueil ***/

/* Navigation vers la fonctionnalité "Divise l'addition" */
Bouton_Fair.addEventListener("click", function () {
    var Total_Home = document.getElementById("total--home").value
    Total_Chloe = Total_Home/4
    Total_Alois = Total_Home/4
    Total_Mahault = Total_Home/4
    Total_AnneSophie = Total_Home/4
    document.getElementById("repartition--person1").innerHTML = (Total_Home/4).toFixed(2)
    document.getElementById("repartition--person2").innerHTML = (Total_Home/4).toFixed(2)
    document.getElementById("repartition--person3").innerHTML = (Total_Home/4).toFixed(2)
    document.getElementById("repartition--person4").innerHTML = (Total_Home/4).toFixed(2)
    Ecran_Repartition_1.classList.add("screen--active")
});


/*** Ecran répartition ***/

/* Bouton "Ajouter un produit en commun */
Bouton_Common.addEventListener("click", function () {
    Ecran_Repartition_2.classList.add("screen--active")
});

/* Bouton "Terminer" pour revenir à l'accueil */
Bouton_Home.addEventListener("click", function () {
   Ecran_Repartition_1.classList.remove("screen--active") 
});

function dynamicEventProduct(){
    
    if ($(this).attr('data-chloe') == 1){
        Total_Chloe = Total_Chloe - $(this).attr('class')
        Total_Alois = Total_Alois + $(this).attr('class')/3
        Total_Mahault = Total_Mahault + $(this).attr('class')/3
        Total_AnneSophie = Total_AnneSophie + $(this).attr('class')/3
        document.getElementById("repartition--person1").innerHTML = Total_Chloe.toFixed(2);
            document.getElementById("repartition--person2").innerHTML = Total_Alois.toFixed(2);
            document.getElementById("repartition--person3").innerHTML = Total_Mahault.toFixed(2);
            document.getElementById("repartition--person4").innerHTML = Total_AnneSophie.toFixed(2);
    }
    
    if ($(this).attr('data-alois') == 1){
        Total_Alois = Total_Alois - $(this).attr('class')
        Total_Chloe = Total_Chloe + $(this).attr('class')/3
        Total_Mahault = Total_Mahault + $(this).attr('class')/3
        Total_AnneSophie = Total_AnneSophie + $(this).attr('class')/3
        document.getElementById("repartition--person1").innerHTML = Total_Chloe.toFixed(2);
            document.getElementById("repartition--person2").innerHTML = Total_Alois.toFixed(2);
            document.getElementById("repartition--person3").innerHTML = Total_Mahault.toFixed(2);
            document.getElementById("repartition--person4").innerHTML = Total_AnneSophie.toFixed(2);
    }
    
    if ($(this).attr('data-mahault') == 1){
        Total_Mahault = Total_Mahault - $(this).attr('class')
        Total_Alois = Total_Alois + $(this).attr('class')/3
        Total_Chloe = Total_Chloe + $(this).attr('class')/3
        Total_AnneSophie = Total_AnneSophie + $(this).attr('class')/3
        document.getElementById("repartition--person1").innerHTML = Total_Chloe.toFixed(2);
            document.getElementById("repartition--person2").innerHTML = Total_Alois.toFixed(2);
            document.getElementById("repartition--person3").innerHTML = Total_Mahault.toFixed(2);
            document.getElementById("repartition--person4").innerHTML = Total_AnneSophie.toFixed(2);
    }
    
    if ($(this).attr('data-annesophie') == 1){
        Total_AnneSophie = Total_AnneSophie - $(this).attr('class')
        Total_Alois = Total_Alois + $(this).attr('class')/3
        Total_Mahault = Total_Mahault + $(this).attr('class')/3
        Total_Chloe = Total_Chloe + $(this).attr('class')/3
        document.getElementById("repartition--person1").innerHTML = Total_Chloe.toFixed(2);
            document.getElementById("repartition--person2").innerHTML = Total_Alois.toFixed(2);
            document.getElementById("repartition--person3").innerHTML = Total_Mahault.toFixed(2);
            document.getElementById("repartition--person4").innerHTML = Total_AnneSophie.toFixed(2);
    }
    
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    });
    
    
}
    
/*** Ecran répartition division ***/

/* Bouton ajout d'un élément payé par une seule personne */
Bouton_Submit.addEventListener("click", function () {
    var Person_Alone = document.getElementById("person").value,
        Price_Alone = document.getElementById("price--alone").value,
        Product_Alone = document.getElementById("product--alone").value,
        li = document.createElement('li');
        li.setAttribute("class",Price_Alone);
						
        li.innerHTML = '<p class="article_list--el">'+Product_Alone+'<span >'+Person_Alone+'</span><span class="article_list--price">'+Price_Alone+'€</span></p><button class="btn btn--delete">Delete</button>'
		
        if(Person_Alone == " chloé")
        {   
            Total_Chloe =  Number(Total_Chloe) + Number(Price_Alone)
            Total_Alois = Number(Total_Alois) - Number(Price_Alone/3)
            Total_Mahault = Number(Total_Mahault) - Number(Price_Alone/3)
            Total_AnneSophie = Number(Total_AnneSophie) - Number(Price_Alone/3)
            li.setAttribute("data-chloe",1)
        }
        else if(Person_Alone == " alois")
        {
            Total_Alois =  Number(Total_Alois) + Number(Price_Alone)
            Total_Chloe = Number(Total_Chloe) - Number(Price_Alone/3)
            Total_Mahault = Number(Total_Mahault) - Number(Price_Alone/3)
            Total_AnneSophie = Number(Total_AnneSophie) - Number(Price_Alone/3)
            li.setAttribute("data-alois",1)
        }
        else if(Person_Alone == " mahault")
        {
            Total_Mahault =  Number(Total_Mahault) + Number(Price_Alone)
            Total_Chloe = Number(Total_Chloe) - Number(Price_Alone/3)
            Total_Alois = Number(Total_Alois) - Number(Price_Alone/3)
            Total_AnneSophie = Number(Total_AnneSophie) - Number(Price_Alone/3)
            li.setAttribute("data-mahault",1)
        }
        else if(Person_Alone == " anne-sophie")
        {
            Total_AnneSophie =  Number(Total_AnneSophie) + Number(Price_Alone)
            Total_Chloe = Number(Total_Chloe) - Number(Price_Alone/3)
            Total_Alois = Number(Total_Alois) - Number(Price_Alone/3)
            Total_Mahault = Number(Total_Mahault) - Number(Price_Alone/3)
            li.setAttribute("data-annesophie",1)
        }
    
            $('#product_list').append(li);
            li.onclick = dynamicEventProduct;
            document.getElementById("repartition--person1").innerHTML = Total_Chloe.toFixed(2);
            document.getElementById("repartition--person2").innerHTML = Total_Alois.toFixed(2);
            document.getElementById("repartition--person3").innerHTML = Total_Mahault.toFixed(2);
            document.getElementById("repartition--person4").innerHTML = Total_AnneSophie.toFixed(2);
});

/* Bouton "Terminer" pour revenir sur l'écran de répartition*/ 
Bouton_Back.addEventListener("click", function () {
    Ecran_Repartition_2.classList.remove("screen--active")
});



/*************************************/
/******** CHACUN PAIE SA PART ********/
/*************************************/



/*** Accueil ***/

var Total_Home = 0;
    
/* Navigation vers la fonctionnalité "Chacun paie sa part" */
Bouton_Self.addEventListener("click", function () {
    Total_Home = document.getElementById("total--home").value
    document.getElementById("total_validation").innerHTML = Total_Home+'€';
        Ecran_Chacun.classList.add("screen--active")
});



/*** Ecran répartition chacun ***/

var Bouton_Submit_Chloe = document.getElementById('btn--submit_chloe'),
    Bouton_Submit_Alois = document.getElementById('btn--submit_alois'),
    Bouton_Submit_Mahault = document.getElementById('btn--submit_mahault'),
    Bouton_Submit_AnneSophie = document.getElementById('btn--submit_annesophie'),
    Bouton_Submit_Global = document.getElementById('btn--submit_global'),
    Total_Details_Chloe = 0,
    Total_Details_Alois = 0,
    Total_Details_Mahault = 0,
    Total_Details_AnneSophie = 0

Bouton_Share.addEventListener("click", function () {
    Ecran_Share.classList.add("screen--active")
});

/* Apparition de l'écran de répartition de Chloé */
Box_Chloe.addEventListener("click", function () {
    Ecran_Chloe.classList.add("screen--active")
});

/* Suppression d'un élément de l'écran répartition */

function dynamicEventChloe(){
    Total_Details_Chloe = Total_Details_Chloe - $(this).attr('class')
    Total_Home = +Total_Home + +$(this).attr('class')
     
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    })
    
    document.getElementById('total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
    document.getElementById('recap_total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
    document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
}

/* Ajout d'un élément sur l'écran de répartition */
Bouton_Submit_Chloe.addEventListener("click", function () {
    var Price = document.getElementById("price--chloe").value,
        Product = document.getElementById("product--chloe").value,
        li = document.createElement('li');
        li.setAttribute("class",Price),
        Total_Details_Chloe = Number(Total_Details_Chloe) + Number(Price)
        li.innerHTML = '<p class="article_list--el">'+Product+'<span class="article_list--price">'+Price+'€</span></p><button class="btn btn--delete">Delete</button>'
        $('#chloe_list').append(li);
        li.onclick = dynamicEventChloe;
        Total_Home = Total_Home - Price;
        document.getElementById('total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
        document.getElementById('recap_total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
        document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
});

/* Apparition de l'écran de répartition d'Aloïs */
Box_Alois.addEventListener("click", function () {
    Ecran_Alois.classList.add("screen--active")
});
    

/* Suppression d'un élément de l'écran répartition */

function dynamicEventAlois(){
    Total_Details_Alois = Total_Details_Alois - $(this).attr('class')
    Total_Home = +Total_Home + +$(this).attr('class')
    
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    })
    
    document.getElementById('total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
    document.getElementById('recap_total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
    document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
}

/* Ajout d'un élément sur l'écran de répartition */
Bouton_Submit_Alois.addEventListener("click", function () {
    var Price = document.getElementById("price--alois").value,
        Product = document.getElementById("product--alois").value,
        li = document.createElement('li');
        li.setAttribute("class",Price),
        Total_Details_Alois = Number(Total_Details_Alois) + Number(Price)
        li.innerHTML = '<p class="article_list--el">'+Product+'<span class="article_list--price">'+Price+'€</span></p><button class="btn btn--delete">Delete</button>'
        $('#alois_list').append(li);
        li.onclick = dynamicEventAlois;
        Total_Home = Total_Home - Price;
        document.getElementById('total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
        document.getElementById('recap_total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
        document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
});

    
/* Apparition de l'écran de répartition de Mahault */
Box_Mahault.addEventListener("click", function () {
    Ecran_Mahault.classList.add("screen--active")
});
    
/* Suppression d'un élément de l'écran répartition */

function dynamicEventMahault(){
    Total_Details_Mahault = Total_Details_Mahault - $(this).attr('class')
    Total_Home = +Total_Home + +$(this).attr('class')
    
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    });
    
    document.getElementById('total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
    document.getElementById('recap_total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
    document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
}

/* Ajout d'un élément sur l'écran de répartition */
Bouton_Submit_Mahault.addEventListener("click", function () {
    var Price = document.getElementById("price--mahault").value,
        Product = document.getElementById("product--mahault").value,
        li = document.createElement('li');
        li.setAttribute("class",Price),
        Total_Details_Mahault = Number(Total_Details_Mahault) + Number(Price)
        li.innerHTML = '<p class="article_list--el">'+Product+'<span class="article_list--price">'+Price+'€</span></p><button class="btn btn--delete">Delete</button>'
        $('#mahault_list').append(li);
        li.onclick = dynamicEventMahault;
        Total_Home = Total_Home - Price;
        document.getElementById('total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
        document.getElementById('recap_total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
        document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
});    

/* Apparition de l'écran de répartition d'Anne-Sophie */
Box_AnneSophie.addEventListener("click", function () {
    Ecran_AnneSophie.classList.add("screen--active")
});

/* Suppression d'un élément de l'écran répartition */

function dynamicEventAnneSophie(){
    Total_Details_AnneSophie = Total_Details_AnneSophie - $(this).attr('class')
    Total_Home = +Total_Home + +$(this).attr('class')
    
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    });
    
    document.getElementById('total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
    document.getElementById('recap_total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
    document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
}

/* Ajout d'un élément sur l'écran de répartition */
Bouton_Submit_AnneSophie.addEventListener("click", function () {
    var Price = document.getElementById("price--annesophie").value,
        Product = document.getElementById("product--annesophie").value,
        li = document.createElement('li');
        li.setAttribute("class",Price),
        Total_Details_AnneSophie = Number(Total_Details_AnneSophie) + Number(Price)
        li.innerHTML = '<p class="article_list--el">'+Product+'<span class="article_list--price">'+Price+'€</span></p><button class="btn btn--delete">Delete</button>'
        $('#annesophie_list').append(li);
        li.onclick = dynamicEventAnneSophie;
        Total_Home = Total_Home - Price;
        document.getElementById('total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
        document.getElementById('recap_total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
        document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
});    


/*** Ecran partager le prix d'un produit ***/

/* Suppression d'un élément de l'écran répartition */

function dynamicEventGlobal(){
    Total_Home = +Total_Home + +$(this).attr('class')
    
    if ($(this).attr('data-chloe') == 1){
        Total_Details_Chloe = Total_Details_Chloe - $(this).attr('class')/$(this).attr('data-nb')
        document.getElementById('total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
        document.getElementById('recap_total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
    }
    
    if ($(this).attr('data-alois') == 1){
        Total_Details_Alois = Total_Details_Alois - $(this).attr('class')/$(this).attr('data-nb')
        document.getElementById('total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
        document.getElementById('recap_total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
    }
    
    if ($(this).attr('data-mahault') == 1){
        Total_Details_Mahault = Total_Details_Mahault - $(this).attr('class')/$(this).attr('data-nb')
        document.getElementById('total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
        document.getElementById('recap_total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
    }
    
    if ($(this).attr('data-annesophie') == 1){
        Total_Details_AnneSophie = Total_Details_AnneSophie - $(this).attr('class')/$(this).attr('data-nb')
        document.getElementById('total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
        document.getElementById('recap_total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
    }
    
    $(this).addClass("element--out").delay(500).queue(function(next){
    $(this).remove()
    next();
    });
    
    document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
}

/* Ajout d'un produit */
    

Bouton_Submit_Global.addEventListener("click", function () {
    var Price = document.getElementById("price--global").value,
        Product = document.getElementById("product--global").value,
        Nb_Participant = 0,
        Persons = '',
        li = document.createElement('li');
    
        if ( $('#check_chloe').is(':checked')){
            Persons = Persons + " Chloé "
            Nb_Participant = Nb_Participant +1;
        } 
    
        if ( $('#check_alois').is(':checked')){
            Persons = Persons + " Aloïs "
            Nb_Participant = Nb_Participant +1;
        }
    
        if ( $('#check_mahault').is(':checked')){
            Persons = Persons + " Mahault "
            Nb_Participant = Nb_Participant +1;
        }
    
        if ( $('#check_annesophie').is(':checked')){
            Persons = Persons + " Anne-Sophie "
            Nb_Participant = Nb_Participant +1;
        }    
    
        if ( $('#check_chloe').is(':checked')){
            Total_Details_Chloe = Total_Details_Chloe + Price/Nb_Participant
            li.setAttribute("data-chloe",1)
        } 
    
        if ( $('#check_alois').is(':checked')){
            Total_Details_Alois = Total_Details_Alois + Price/Nb_Participant
            li.setAttribute("data-alois",1)
        }
    
        if ( $('#check_mahault').is(':checked')){
            Total_Details_Mahault = Total_Details_Mahault + Price/Nb_Participant
            li.setAttribute("data-mahault",1)
        }
    
        if ( $('#check_annesophie').is(':checked')){
            Total_Details_AnneSophie = Total_Details_AnneSophie + Price/Nb_Participant
            li.setAttribute("data-annesophie",1)
        }
    
        li.setAttribute("class",Price),
        li.setAttribute("data-nb",Nb_Participant),
        li.innerHTML = '<p class="article_list--el">'+Product+'<span class="article_list--persons">'+Persons+'</span><span class="article_list--price">'+Price+'€</span></p><button class="btn btn--delete">Delete</button>'
        $('#global_list').append(li);
        li.onclick = dynamicEventGlobal;
        Total_Home = Total_Home - Price;
        document.getElementById('total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
        document.getElementById('recap_total--chloe').innerHTML = Total_Details_Chloe.toFixed(2)+'€';
        document.getElementById('total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
        document.getElementById('recap_total--alois').innerHTML = Total_Details_Alois.toFixed(2)+'€';
        document.getElementById('total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
        document.getElementById('recap_total--mahault').innerHTML = Total_Details_Mahault.toFixed(2)+'€';
        document.getElementById('total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
        document.getElementById('recap_total--annesophie').innerHTML = Total_Details_AnneSophie.toFixed(2)+'€';
        document.getElementById('total_validation').innerHTML = Total_Home.toFixed(2)+'€';
        
});    

    
/* Checkbox all */    
    
$("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
}); 
 

/******* BOUTONS HEADER *******/

var Bouton_Accueil = document.getElementsByClassName("btn--accueil"),
    Bouton_Details = document.getElementsByClassName("btn--details");

for (var i=0; i<Bouton_Accueil.length; i++){ 
    Bouton_Accueil[i].addEventListener("click", function () {
        Ecran_Repartition_1.classList.remove("screen--active"),
        Ecran_Repartition_2.classList.remove("screen--active"),
        Ecran_Chacun.classList.remove("screen--active");
    });   
}

for (var i=0; i<Bouton_Details.length; i++){
    Bouton_Details[i].addEventListener("click", function () {
        Ecran_Chloe.classList.remove("screen--active");
        Ecran_Alois.classList.remove("screen--active");
        Ecran_Mahault.classList.remove("screen--active");
        Ecran_AnneSophie.classList.remove("screen--active");
        Ecran_Share.classList.remove("screen--active");
    });
}

});