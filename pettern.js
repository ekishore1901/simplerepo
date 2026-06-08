// Pattern 1

for(var i=1; i<=4; i++){

    var row = "";

    for(var j=1; j<=4; j++){

        row = row + "* ";
    }

    console.log(row);
}


// Pattern 2

for(var i=1; i<=4; i++){

    var row = "";

    for(var j=1; j<=i; j++){

        row = row + "* ";
    }

    console.log(row);
}

// Pattern 3

for(var i=1; i<=4; i++){

    var row = "";

    for(var j=1; j<=i; j++){

        row = row + i + " ";
    }

    console.log(row);
}


// Pattern 4

var num = 1;

for(var i=1; i<=4; i++){

    var row = "";

    for(var j=1; j<=i; j++){

        row = row + num + " ";

        num++;
    }

    console.log(row);
}
