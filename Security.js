class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);  

        this.button1 = createButton('Check');
        this.button1.position(100,120);

        this.access2 = createInput("Code2")
        this.access2.position(700,190);

        this.button2 = createButton('Check');
        this.button2.position(700,220);

        this.access3 = createInput("Code3");
        this.access3.position(100,331);

        this.button3 = createButton("Check")
        this.button3.position(100,363)

    }

    display(){

        this.button1.mousePressed(() => {
            if(this.access1.value() === "VARIABLE"){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(this.access2.value() === "FUNCTION"){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(this.access3.value() === "DATABASE"){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

    }
}