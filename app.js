const input = document.querySelector("[name='newItem']");

//Adds the removal option to existing list items
addRemovalOption();

/*
 *Add new items to the list. Format: <li> is within a <span class="shoppingListItem">.  The removal option 
 * is within a <span class="remove">
 */
document.addEventListener("keypress", function (event){
    //item added to list upon pressing enter
    if(input === event.target && event.code === "Enter"){
       let shoppingList = document.querySelector("#shoppingList");
       let newListItem = document.createElement("li");
       
       let newSpan = document.createElement("span"); 
       newSpan.setAttribute("class","shoppingListItem");
       
       let inputTxt = input.value;
       let newTxtNode = document.createTextNode(inputTxt);

       newSpan.appendChild(newTxtNode);
       newListItem.appendChild(newSpan);
       shoppingList.appendChild(newListItem);   
    
       //reset input box
       input.value = "";
       //add option to remove item
       addRemovalOption();
    }
});

//click events
document.addEventListener("click", function(event){

    let shoppingList = document.querySelector("#shoppingList");
    let shoppingListItems = document.querySelectorAll("#shoppingList li");
    let xSuperscript = document.querySelector(".remove sup");
     
    if(shoppingListItems.length >=1) {

        /*
        * Complete items by clicking the item which will turn the font
        * red and strikes out the item. If the item is already struck
        * through, then the item displays with normal font and without
        * the line strike
        * 
        */
        if(event.target.classList.contains("shoppingListItem")){
            
                if(event.target.classList.contains("red")){
                    event.target.classList.remove("red");
                }else{
                    event.target.classList.add("red");
                }
        } 

        /*
         * When the remove 'x' is clicked the item will be removed
         * from the list
         */        
        if(xSuperscript.nodeType === event.target.nodeType){
            shoppingListItems.forEach(function(item){
              
                if(item.querySelector(".remove sup") === event.target){
                    shoppingList.removeChild(item);
                }
            
            });
        } 
}  
});

/* Add an 'x' to each list item to allow for item removal from
 * the list
 */
function addRemovalOption(){
    let shoppingListItems = document.querySelectorAll("#shoppingList li");
    let xSuperscript = document.querySelector(".remove sup");
    shoppingListItems.forEach(function(item) {
        let xText = " x";
        
        if(xText !== item.lastElementChild.textContent){
            let xSpan = document.createElement("span");
            let xSuperscript = document.createElement("sup");
            xSpan.classList.add("remove");
            let xTextNode = document.createTextNode(xText);
            xSuperscript.appendChild(xTextNode);
            xSpan.appendChild(xSuperscript);
            item.appendChild(xSpan);

            document.addEventListener("click", function(event){
               
            })
        }
    });
};

 
