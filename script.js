


function screen_refresh(btn) {
    const calc_screen = document.getElementById("calcScreen").value;
    document.getElementById("calcScreen").value = calc_screen + btn;

    const calc_screen1 = document.getElementById("calcScreen").value;

    if (calc_screen1[0] == "0"){
        document.getElementById("calcScreen").value = calc_screen1.slice(1, calc_screen1.length)
    };


    if (calc_screen1[calc_screen1.length -2] == "+" || calc_screen1[calc_screen1.length -2] == "-" || calc_screen1[calc_screen1.length -2] == "x" || calc_screen1[calc_screen1.length -2] == "÷"){
        
        var exp = calc_screen1[calc_screen1.length -1];
        if (exp != "1" && exp != "2" && exp != "3" && exp != "4" && exp != "5" && exp != "6" && exp != "7" && exp != "8" && exp != "9" && exp != "0"){
            document.getElementById("calcScreen").value = calc_screen1.slice(0, calc_screen1.length -2) + calc_screen1[calc_screen1.length -1]
        };
    };

  };

function clear_screen(){
    const calc_screen2 = document.getElementById("calcScreen").value;
    document.getElementById("calcScreen").value = calc_screen2.slice(0, calc_screen2.length - 1)
};

function calculate(){
    let new_screen_text = document.getElementById("calcScreen").value.replace("x", "*").replace("÷", "/")
    let exp2 = new_screen_text[new_screen_text.length - 1]

    if (exp2 != "*" && exp2 != "÷" && exp2 != "-" && exp2 != "+"){
        document.getElementById("calcScreen").value = eval(new_screen_text)
    };

};

window.onload = function(){
    var buttons = document.getElementsByTagName("input");
    var buttonsCount = buttons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function() {
            if (this.id == "btn_13"){
                clear_screen()
            }else if (this.id == "btn_14"){
                calculate()
            }else if (this.id == "btn_4" || this.id == "btn_8" || this.id == "btn_11" || this.id == "btn_15"){
                screen_refresh(this.value)
            }else{
                screen_refresh(this.value)
            };
        };
    };
};