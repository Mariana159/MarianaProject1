let Records = [];
let numRecord = 10;


function setup() {
    createCanvas(windowWidth, windowHeight);
    window.alert('Album and Records: Right click for Records to appear. Slide mouse on the right side so that the lights move down and to the left so they move back up')
    //windowalert

    ///make a new block, ++ is the same as saying i=i
    for (let i=1; i <= numRecord; i++){
        let Rx= i*50;
        let Ry=i*20;
        let speedRx= i;
        let speedRy= i;
        Records[i]= new Record(Rx,Ry,speedRx,speedRy);
    }
}

//for the first curve
let z1=400
let y=800
let j=600
let y3=700




let speedz1=11


function draw() {
    background(10);

    
    fill(100);
    rect(100,0,50,800);


    //curves that are floating around
    //the red one
    noStroke();
    fill(200,50,10);
    stroke(10)
    curve(200,y,z1+400,100,j,y3,700,800);
    

    fill(200,60,10);
    curve(200,y,z1+300,100,j,y3,700,800);
    

    fill(200,90,10);
    stroke(10);
    curve(200,y,z1+200,100,j,y3,700,800);
    

    fill(100);
    stroke(10);
    curve(200,y,z1,100,j,y3,700,800);
    z1=z1+speedz1
    y=y+z1
    if(z1 >=800 || z1<=150){
        speedz1=(-1)*speedz1;


    }

    //circle
    
    
  
    


    if (mouseIsPressed === true) {

        value=0
        value2=155
        R=200
        R2=R/2
        st=155
        for (i=1; i<Records.length; i++){
            Records[i].move();
            Records[i].show();
        }

    }else{
        R=50
        R2=49
        st=0
        value=155
        value2=value
    }
    print(mouseIsPressed);

    stroke(st)
    ellipseMode(RADIUS);
    fill(value);
    ellipse(375, 300, R, R); // Outer black ellipse
    ellipseMode(CENTER);
    fill(value2);
    ellipse(375, 300, R2, R2); // Inner gray ellipse

    let t = map(mouseX, 0, width, -5, 5);
    curveTightness(t);
    

    console.log(Records);
    console.log(Records[0]);

    stroke(100);
    fill(200);

    rect(580,0,38,800);

}

class Record {
    constructor(Rx, Ry, speedRx, speedRy){
        this.Rx=Rx;
        this.Ry=Ry;
        this.speedRx=speedRx;
        this.speedRy=speedRy;
    }

    
    move( ){
        
        this.Rx=this.Rx+this.speedRx
        this.Ry=this.Ry+this.speedRy

 
        if (this.Rx<=500){
            this.Rx=this.Rx+700
        }
        if (this.Rx>= windowWidth || this.Rx<=650){
                this.speedRx=(-1)*this.speedRx;
            }
        

        if (this.Ry >= windowHeight || this.Ry<=0){
            this.speedRy=(-1)*this.speedRy;

        }

    }

    show(){
        stroke(150)
        ellipseMode(RADIUS);
        fill(20);
        ellipse(this.Rx, this.Ry, 30, 30); // Outer black ellipse
        ellipseMode(CENTER);
        fill(255);
        ellipse(this.Rx, this.Ry, 20, 20); // Inner gray ellipse
    }    

    

}



    
    
 


    




