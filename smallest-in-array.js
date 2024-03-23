<!DOCTYPE html>
<html>
<head>
  <title>Smallest Integer in Array</title>
  
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">SMALLEST ELEMENT IN ARRAY</h1>
    <script>
        function findSmallestElement(arr) {
            if (arr.length === 0) {
            return "Array is empty";
        }

        let smallest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]; 
        }
    }

    return smallest;
}

        const input = prompt("Enter elements of the array separated by commas (,):");
        const array = input.split(",").map(Number);
        const smallestElement = findSmallestElement(array);

        document.write('<h2 style="text-align: center; background-color: rgb(207, 90, 27); border:20px;"> Result is: ' + smallestElement + '</h2>');

    </script>
</body>
</html>
