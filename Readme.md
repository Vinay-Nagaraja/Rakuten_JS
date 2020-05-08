JavaScript language Fundametals

Banuprakash C

banu@lucidatechnologies.com

banuprakashc@yahoo.co.in

https://github.com/BanuPrakash/Rakuten_JS

-------------------------------
Softwares required for first 2 days:
1) Visual Studio Code or Sublime Text or any IDE of your choice
2) Chrome Browser 
------------------------------------
9 - 12
2 - 5

JavaScript
    --> Scripting language 
    --> Dynamically typed language
            Data type is decided at runtime not at the time of compilation
    --> Loosely typed language not Strictly typed
            In Java:
                while(1) {} // error
                while(true) {}
    --> Single Threaded

    ==============
    JavaScript version:
    ES5 ==> ECMAScript version 5
    ECMA ==> Specifications
    JavaScript executes within an JS engine
        V8 ==> developed by Google ==> used in Chrome Browser and NodeJS
        Nashorn ==> developed by Oracle ==> most of oracle products
        Spidermonkey ==> Firefox , Adobe products
        Chakra ==> MS ==> IE

    ---
    variables:
    1) 
        "var" keyword is used to declare a variable

        var name = "Peter"; //string

        var age = 25; // number

        var employed = false; // boolean

        age++; // is valid

        name++; //error


        age = "Twenty Six"; // valid


    2) functions are also first class members in JS

        function add(x, y) {
                return x + y;
        }

        function sub(x,y) {
                console.log(x - y);
        }


        var mul = function(x,y) {
                return x * y;
        };

    3) Variable scope and how compiler and interpreter treats them
        JS is compiled and interpreted

        any variable declared with "var" keyword is resolved at compilation time.
        In JS variables can be implcit [ declare without var keyword], these variables
        are evaluated only at interpreter stage and they would be moved to global scope

    4) variable hoisting
        ==> variables declared with "var" keyword will be evaluated @ compile time and hoisted to function scope

        function test() {
                console.log(g); // valid ===> undefined
                g = 10;
                  console.log(g); // 10
                var g; // valid
        }
        test();
        console.log(g); // not visible
        ==
        no members are created at compilation time:
        @runtime interpreter asks "test" do you know =>"g", ==> NO , then
        it uses scope pointer to check if its availble in outer scope, like this it chains till
        reaches global and creates "g" on global scope
         function test() {
                console.log(g); // valid ===> undefined
                g = 10;
                console.log(g); // 10
        }
        test();
        console.log(g); //  



        compiler creates "g" 
        @ runtime assign

    ===========================================

    5) semi-colon insertions
    	Try this:

    	function add(x, y) {
    			return x + y;
    	}

    	console.log(add(5,6)); 

    	-----

    	function add(x, y) {
    			return 
    				x + y;
    	}

    	console.log(add(5,6)); // undefined because of semi-colon insertion after return

    6) As of ES5, ECMAScript 5
    	we have only global scope and function scope, no local scope

    	var x = 10;
        function test() {
        	if (x > 2) {
                var y = 50;   
            }
            console.log(y);  // 50
        }
        test();

        "y" becomes function scope

      ==============
      
        'use strict'
        // variable hoisting and shadowing
        var x = 10;
        function test() {
            if (x > 2) {
                 y = 50;   //first.html:18 Uncaught ReferenceError: y is not defined
            }
            console.log(y);  // 50
        }
        test();  
      ================

     ====================================================================================================

     Object Oriented Programming using JavaScript
     --------------------------------------------
     	OOP ==> resembles real world applications.
     		In real world objects like "Tv", "Bulb", "AC", we communicate with these objects
     		by sending a message [ "on", "off", "changeTemp", "changeChannel"]

     		In software oop: messages are actions/functions of that particular object.

     		How do you send a message
     		object.message(arguments);

     		tv.changeChannel(440); // change the channel of tv to 440

     		ac.setTemp(22); // set temp of AC to 22

     		ac.on();
     		ac.off();

     		When ac.on() is called, it changes to [ on(ac)]

     		Every Object contains state and behaviour.
     			AC
     				temparature is a state
     				increase(), on(), off(), decrease(), fanspeed() are behaviours/functions/messages/action of AC

     			SavingsAccount
     				balance is a state
     				deposit(), withdraw() are behiovrs or actions or message to change the state

     			Not allowing state to be accessed directly, and changes to state done only thro actrions
     			is what is the priciple of OOP

     		We need templates to create objects, just like real-world: Blueprint
     		In Software also we need blueprint to create objects [ templates]
     			In Java: class is a template
     			In JavaScript: function can be a template

     1) using function constructor

     	// template for creating objects
     	function Person(name, age) {
     			this.name = name;
     			this.age = age;
     	}

     	var p1 = new Person("Smith", 22); // p1 is an object of type Person

     	var p2 = new Person("Peter", 34); // p2 is an object of type Person

     	console.log(p1.name); // Smith

     	console.log(p2.name); // peter


     	"this" is a keyword to refer to the context [ object which has invoked the function]


     	function doTask() { // doTask(this) {
     			console.log(this.age);
     	}

     	p1.doTask(); // doTask(p1); // 22 "this" refers to "p1"

     	p2.doTask(); // doTask(p2); // this refers to "p2" // 34


     2) We can create objects using JSON
     	JavaScript Object Notation.
     	{} is an object

     	var obj = {}; // obj is an object, no state nor behaviour.

     	--
     	Adding state. ==> JSON understands number, string, boolean, undefined, null, array, object

     	x = 10; // number

     	name = "Arun"; // string
     	place = 'Bengaluru';  // string

     	flag = true; // boolean

     	var test; // undefined

     	var ptr = null; // null

     	var elems = [2,4,6,88]; //array

     	var obj = {}; // objects

     	JSON objects:

     		var person = {
     				"id": 1,
     				"name" : "smith",
     				"getDetails": function() {
     						return this.id +"," + this.name;
     				}
     		}

     		 var products = [
       {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
       {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
       {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
       {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
         {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

     	===============================

     	Resume @ 2:00

     	Morning session:
     		Variables in JS, how to declare, scope of the variable, hoisting
     		declare a function "function" keyword, "functions" as first class members
     		dynaminc typing, loosly typed language

     		OOP
     			function as function constructor for creating objects.
     			"this" keyword to refer to the context [ access state of object using "this"]

     			JSON as object representation

     			functions and context

     			var obj = new Object();

     			obj.id = 100;
     			obj.name = "Peter";

     		----------------
     		
     		var actions = {
     					"getInfo" : function() {
            			    console.log(this.id, this.name);
            			}
       		}
		 
		 	var product = {
            	"id": 565,
            	"name" : "iPhone XR"
        	};	

        	var p = Object.assign(actions,product); // MIXIN

        	p.id; // 565
        	p.getInfo();


        	=========

        	var emp = {
        			"email": "me@rakuten.com"
        	};

        	var copy = Object.assign({}, emp); // changing copy won't effect emp

        	// var cp = emp; ==> Reference, changing cp will change emp

        	pass copy to different functionliaties without worring about data corruption
        	copy.email = "sdfs";

        	======================================

        	JavaScript ==> Callbacks and event driven programming

        	=============================================================
        	OOP --> functions/methods tightly coupled to state of object [ this ]

        	var actions = {
     					"getInfo" : function() {
            			    console.log(this.id, this.name);
            			}
       		}

       		getInfo is coupled to objects which has "id" and "name" ==> state


        	Functional style of programming

        	allows writing functions without tightly coupling to any object
        	Functional style of programming uses High Order Functions.

        	HOF:
        		a) functions which accept other functions as arguments
        			var f = function(num) {
  							process(num);
 					};

        			[1,2,3,4,5,6].forEach(f);

        			setTimeout(function() { } , 100);

        		b) function return a function [ closure]

        			var a = 2;
					b = 1;
					function f(z) {
						b = 3;
						c = 4;
						var d = 6;
						e = 1;

						function g() {	
							var e = 0;
							d = 3 * d;
							return d;
						}
						return g; // return a function
						var e;
					 }

					var fn = f(1); //  fn will not be a value, but function definition of "g"
					fn();

				=====================

				Commonly used HOF:
					a) filter
						to get a subset
						input m, output -- > n
					b) map
						to transform data
						JSON ==> HTML
						{
							"id": 100,
							"title" : "Laptop"
						}

						<tr>
							<td>100</id> <td> Laptop </td>
						</tr>
						=========

						pass product collection ==> get only names [string]
						--
						input = 100 elements , output = 100 elements transformed
					c) reduce
					d) forEach
					e) limit
					f) skip



					function filter(predicate) {
							create a empty collection
							 loop thro input data
								if(predicate)
									add to collection
								end if
							end loop
							return collection
					}

					 