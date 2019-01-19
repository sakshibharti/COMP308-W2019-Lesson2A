

//IIFE -- Immediately Invoked Function Expression

(function(){
    function Start(){
        const student: objects.Student = new objects.Student(30, "Sarah", "P0089878");
        student.saysHello();
        student.studies();
    }
window.addEventListener("load",Start);


})();


