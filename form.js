function addInfo(e) {
    e.preventDefault();
    //alert('Information Added')
    const newList = document.createElement('ul')

    const foodname = document.createElement('li')
    const desc = document.createElement('li')
    const url = document.createElement('li')
    const rank = document.createElement('li')

    const imageCard = {
        foodname: foodname.innerHTML + document.getElementById('fn').value,
        desc: desc.innerHTML + document.getElementById('dc').value,
        url: url.innerHTML + document.getElementById('ul').value,
        rank: rank.innerHTML + document.getElementById('rk').value
    }
    if(imageCard.foodname == "" || imageCard.desc == "" || imageCard.url == "" || imageCard.rank > 4 ){
        alert("Invalid Inputs. Please Try again")
        document.getElementById("fn").value = ""
        document.getElementById("dc").value = ""
        document.getElementById("ul").value = ""
        document.getElementById("rk").value = ""
    }
    else{
        if(imageCard.rank == 1){
            document.getElementById("img1").src = imageCard.url
            document.getElementById("name1").innerHTML = imageCard.foodname
            document.getElementById("desc1").innerHTML = imageCard.desc
            document.getElementById("fn").value = ""
            document.getElementById("dc").value = ""
            document.getElementById("ul").value = ""
            document.getElementById("rk").value = ""
        }
        if(imageCard.rank == 2){
            document.getElementById("img2").src = imageCard.url
            document.getElementById("name2").innerHTML = imageCard.foodname
            document.getElementById("desc2").innerHTML = imageCard.desc
            document.getElementById("fn").value = ""
            document.getElementById("dc").value = ""
            document.getElementById("ul").value = ""
            document.getElementById("rk").value = ""
        } 
        if(imageCard.rank == 3){
            document.getElementById("img3").src = imageCard.url
            document.getElementById("name3").innerHTML = imageCard.foodname
            document.getElementById("desc3").innerHTML = imageCard.desc
            document.getElementById("fn").value = ""
            document.getElementById("dc").value = ""
            document.getElementById("ul").value = ""
            document.getElementById("rk").value = ""
        } 
        if(imageCard.rank == 4){
            document.getElementById("img4").src = imageCard.url
            document.getElementById("name4").innerHTML = imageCard.foodname
            document.getElementById("desc4").innerHTML = imageCard.desc
            document.getElementById("fn").value = ""
            document.getElementById("dc").value = ""
            document.getElementById("ul").value = ""
            document.getElementById("rk").value = ""
        }
    }
}

function delete1(){
    document.getElementById("img1").src = "https://static-00.iconduck.com/assets.00/question-mark-circle-outline-icon-256x256-otjfisbj.png"
    document.getElementById("name1").innerHTML = "[Food Name]"
    document.getElementById("desc1").innerHTML = "[Description]"
}
function delete2(){
    document.getElementById("img2").src = "https://static-00.iconduck.com/assets.00/question-mark-circle-outline-icon-256x256-otjfisbj.png"
    document.getElementById("name2").innerHTML = "[Food Name]"
    document.getElementById("desc2").innerHTML = "[Description]"
}
function delete3(){
    document.getElementById("img3").src = "https://static-00.iconduck.com/assets.00/question-mark-circle-outline-icon-256x256-otjfisbj.png"
    document.getElementById("name3").innerHTML = "[Food Name]"
    document.getElementById("desc3").innerHTML = "[Description]"
}
function delete4(){
    document.getElementById("img4").src = "https://static-00.iconduck.com/assets.00/question-mark-circle-outline-icon-256x256-otjfisbj.png"
    document.getElementById("name4").innerHTML = "[Food Name]"
    document.getElementById("desc4").innerHTML = "[Description]"
}

const addButton = document.getElementById('submit')
const deleteButton1 = document.getElementById('delete1')
const deleteButton2 = document.getElementById('delete2')
const deleteButton3 = document.getElementById('delete3')
const deleteButton4 = document.getElementById('delete4')
addButton.addEventListener('click', addInfo)
deleteButton1.addEventListener('click', delete1)
deleteButton2.addEventListener('click', delete2)
deleteButton3.addEventListener('click', delete3)
deleteButton4.addEventListener('click', delete4)