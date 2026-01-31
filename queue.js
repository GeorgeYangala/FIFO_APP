class Queue {
    constructor() {
        this.items = [];
    }

    //methode d'ajout
    enqueue(element) {
        if (element == "") {
            return null;
        }
        this.items.push(element);
    }

    //methode de suppression
    dequeue() {
        if (this.isEmpty()) {
            return "Pas d'élément";
        }
        return this.items.shift();
    }
    //vérifier le premier élément

    front() {
        if (this.isEmpty()) {
            return "Pas d'éléments";
        }
        return this.items[0];
    }
    //vérifier l'existance 

    isEmpty() {
        return this.items.length == 0;
    }

    //afficher les éléments de la file 
    printQueue() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " | ";
        }
        return str;
    }
}

let myQueue = new Queue();



// ajouter un élément
function enqueue() {
    let input = document.getElementById("queue-input").value;
    myQueue.enqueue(input);
    document.getElementById("queue-output").innerHTML = myQueue.printQueue();
}


// supprimer le premier élément
function dequeue() {
    let output = myQueue.dequeue();
    document.getElementById("queue-output").innerHTML = myQueue.printQueue();
}

// afficher le premier élément de la fil d'attente
function front() {
    let output = myQueue.front();
    document.getElementById("queue-output").innerHTML = output;
}

// pour vérifier si la fil d'attente est vide 
function isEmpty() {
    let output = myQueue.isEmpty();
    document.getElementById("queue-output").innerHTML = output;
}