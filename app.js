
$(document).ready(function(){
    const arr1= [$(".header_tab  .btn_history"),$(".header_tab  .btn_vision"),$(".header_tab  .btn_goals")]; // array of buttons
    const arr2 = [$("#history_content"),$("#vision_content"),$("#goals_content")]; // array of tab-item-contents
    const items = $(".tab_content > .item_contents"); 

    for(let i=0;i<arr1.length;i++)
    { 
        arr1[i].click(function(){
            for(let j=0; j<arr2.length;j++)
            {   // delete akk active class and set display attribute of tab-item-contents for "none" 
                arr1[j].removeClass("active");
                arr2[j].css("display","none");
            }
            // set set display attribute  of tab-item-contents for "block"  again and addclass ".active" into the buttton clicked.
            arr2[i].css("display","block");
            arr1[i].addClass("active");
        })
    }
  });