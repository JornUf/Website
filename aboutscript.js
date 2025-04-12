// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const date = new Date();
//years since jan 1 1970
let unyears = Math.round(date.getTime() / year);



//Some iterator pseudo-class
function NumberIterator() {
    //The number to start with
    this.number = 0;
    //List of numbers to pass through
    this.goals = [];
    //Private - current goal
    var currentGoal = 0;
    //Whether to infinitelly loop around
    this.infinite = false;
    //Pause between changing number
    this.delay = 50;

    //Timeout ID 
    var t_id = null;
    //Self-reference
    var _this = this;
    //Is running or not
    var running = false;

    //This method will be called automatically
    this.step = function() {
        //If out goal is smaller than number decrease it
        if(this.number>this.goals[currentGoal])
          this.number--;
        //if our goal is larger, increase
        else if(this.number<this.goals[currentGoal]){
          this.number++;
          if(this.number === (this.goals[currentGoal] -1 || this.goals[currentGoal] -2)){
            this.delay *= 3;
          }
        }
        //If equals, perform ongoal actions
        else {
          currentGoal++;
          if(currentGoal>=this.goals.length) {
              if(this.infinite)
                 currentGoal = 0;
              else {
                  this.stop();
              }
              if(typeof this.ongoal == "function")
                 this.ongoal(this.number);
          }
        }



        if(typeof this.onstep == "function")
            this.onstep(this.number);

        if(running) {
            tick();
        }

    }
    this.stop = function() {
        if(t_id!=null) {
            clearTimeout(t_id);
            t_id = null;
        }
        running = false;
    }

    //Start counter with this:
    this.start = function() {
        this.stop();
        running = true;
        this.step();
    }
    //This one is heart of the program. It delays between iterations
    function tick() {
        if(t_id!=null) {
            clearTimeout(t_id);
            t_id = null;
        }
        if(running)
          t_id = setTimeout(function() {_this.step();}, _this.delay);
    }
}



//Save div element reference (it's faster to use reference than function call)
var div = document.getElementById("unexp");

//Set up ne instance of that class
var iterator = new NumberIterator();
//Configure waypoints
iterator.goals = [unyears - 48];

iterator.delay = 1000 / iterator.goals[0];
//On step callback
iterator.onstep = function(num) {
    div.innerHTML = num;
}
//Start the thingy
setTimeout(function() { iterator.start(); }, 500);


//Save div element reference (it's faster to use reference than function call)
var div2 = document.getElementById("nrpro");

//Set up ne instance of that class
var iterator2 = new NumberIterator();
//Configure waypoints
iterator2.goals = [25];

iterator2.delay = 1000 / iterator2.goals[0];
//On step callback
iterator2.onstep = function(num) {
    div2.innerHTML = num + "+";
}
//Start the thingy
setTimeout(function() { iterator2.start(); }, 500);