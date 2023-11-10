/* --------------------------- Person constructor --------------------------- */
function Person(name, age){
    this.name= name,
    this.age= age

    };

    // your code here ...
    Person.prototype.greet = function(){
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    }
  // Person greet method
  // your code here ...
  
  
  /* --------------------------- Manager constructor -------------------------- */
  function Manager(name, age, managed){
    this.managed= managed
    Person.apply(this, [name, age]);
    // reuse Person constructor
    // your code here ...
  }
  Manager.prototype= Object.create (Person.prototype);
  
  
  /* -------------------------- Developer constructor ------------------------- */
  function Developer(name, age, skillset){
    this.skillset= skillset
    Manager.apply(this, [name, age,]);
  }
  Developer.prototype= Object.create (Manager.prototype);
  
  /* ----------------------------- Create Objects ----------------------------- */
  // Developer instances
  let maria = new Developer('Maria Popova', 23, ['Python', 'Machine Learning']);
  let pesho = new Developer('Petar Petrov', 19, ['JavaScript', 'Angular', 'React', 'Vue']);
  
  // Manager instances
  let gates = new Manager('Bill Gates', 43, [maria, pesho]);
  
  /* ----------------------------- Use the objects ---------------------------- */
  maria.greet();
  pesho.greet();
  gates.greet();