function Formula_1(Vx0_1, Vy0_1, ax_1, ay_1, t_1){
    let vx = (Vx0_1 + ax_1) * t_1;
    let vy = (Vy0_1 + ay_1) * t_1;
    
    document.getElementById('Formula_1').innerHTML = "vx("+t_1+") = "+Vx0_1+" + "+ax_1+" * "+t_1+"<br>"+
                                                     "vy("+t_1+") = "+Vy0_1+" + "+ay_1+" * "+t_1+"<br>"+
                                                     "El resultado es ("+vx+", "+vy+")";
}