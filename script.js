


function screen_refresh(btn) {
    const calc_screen = document.getElementById("calcScreen").value;
    document.getElementById("calcScreen").value = calc_screen + btn;

    const calc_screen1 = document.getElementById("calcScreen").value;

    if (calc_screen1[0] == "0"){
        document.getElementById("calcScreen").value = calc_screen1.slice(1, calc_screen1.length)
    }

  };

function clear_screen(){
    const calc_screen2 = document.getElementById("calcScreen").value;
    document.getElementById("calcScreen").value = calc_screen2.slice(0, calc_screen2.length - 1)
};

function calculate(){
    
}

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