function Formula_1(x0_1, y0_1, Vx0_1, Vy0_1, ax_1, ay_1, t_1){
    let x = (x0_1 + Vx0_1) * (t_1 + (1/2)) * (ax_1 * (t_1*t_1));
    let y = y0_1 + Vy0_1 * t_1 + (1/2) * ay_1 * (t_1*t_1);
    
    document.getElementById('Formula_1').innerHTML = "x("+t_1+") = "+x0_1+" + "+Vx0_1+" * "+t_1+" + 1/2 * "+ax_1+" * "+t_1+"^2<br>"+
                                                     "y("+t_1+") = "+y0_1+" + "+Vy0_1+" * "+t_1+" + 1/2 * "+ay_1+" * "+t_1+"^2<br>"+
                                                     "El resultado es ("+x+", "+y+")";
}