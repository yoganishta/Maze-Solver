function generate(len) {
    let array = [];
    if(len<=1)
    {
        alert("dimension should be more than 1");
        return;
    }
    for (let l = 0; l < len; l++) {
        array[l] = [];
        for (let k = 0; k < len; k++) {
            array[l][k] = Math.round(Math.random() * 1);
        }
    }
 
    for (let l = 0; l < len; l++) {
        for (let k = 0; k < len; k++) {
            if (l == 0) {
                if (k != 0 && k != len - 1) {
                    if (array[l + 1][k] == 1 && array[l][k + 1] == 1 && array[l][k - 1] == 1) {
                        array[l + 1][k] = 0;
                    }
                } else if (k == 0) {
                    array[l + 1][k] = 0;
                } else {
                    array[l][k - 1] = 0;
                }
            } else if (k == 0) {
                if (l != 0 && l != len - 1) {
                    if (array[l + 1][k] == 1 && array[l][k + 1] == 1 && array[l - 1][k] == 1) {
                        array[l + 1][k] = 0;
                    }
                } else if (l == 0) {
                    array[l + 1][k] = 0;
                } else {
                    array[l - 1][k] = 0;
                }
            } else if (l == len - 1) {
                if (k != 0 && k != len - 1) {
                    if (array[l][k + 1] == 1 && array[l - 1][k] == 1 && array[l - 1][k] == 1) {
                        array[k + 1][l] = 0;
                    }
                } else if (k == 0 && array[l][k + 1] == 1 && array[l - 1][k] == 1) {
                    array[k + 1][l] = 0;
                } else if (k == len - 1 && array[l][k - 1] == 1 && array[l - 1][k] == 1) {
                    array[l - 1][k] = 0;
                }
            } else if (k == len - 1) {
                if (l != 0 && l != len - 1) {
                    if (array[l + 1][k] == 1 && array[l - 1][k] == 1 && array[l][k - 1] == 1) {
                        array[l - 1][k] = 0;
                    }
                } else if (l == 0 && array[l][k - 1] == 1 && array[l + 1][k] == 1) {
                    array[l][k - 1] = 0;
                } else if (l == len - 1 && array[l][k - 1] == 1 && array[l - 1][k] == 1) {
                    array[l - 1][k] = 0;
                }
            } else {
                if (array[l + 1][k] == 1 && array[l][k + 1] == 1 && array[l - 1][k] == 1 && array[l][k - 1] == 1) {
                    array[l + 1][k] = 0;
                }
            }
        }
    }
 
    array[0][0] = 0;
    array[len - 1][len - 1] = 0;

    //console.log(array);
 return array;
    let array1 = [];
   
}
 let len;
 let arr2=[];
 function soln(len)
 {
    arr1=generate(len);
    //console.log(arr1)
    let array1=[];
    try{
    arr2=find(arr1,0,0,array1)
    console.log(arr1)
    console.log(arr2)
    
    const mazeElement = document.getElementById("maze");
    mazeElement.innerHTML = ''; // Clear previous maze

    // Set CSS grid properties
    mazeElement.style.gridTemplateColumns = `repeat(${len}, 20px)`;
    mazeElement.style.width = `${len * 20}px`;
    mazeElement.style.height = `${len * 20}px`;

    for (let l = 0; l < arr1.length; l++) {
        for (let k = 0; k < arr1[0].length; k++) {
            const cellDiv = document.createElement('div');
            if (arr1[l][k] === 0) {
                cellDiv.className = 'space';
                cellDiv.style.height = `(400/${len})px`;
                cellDiv.style.width =  `(400/${len})px`;
            } else {
                cellDiv.className = 'wall';
                cellDiv.style.height = `(400/${len})px`;
                cellDiv.style.width =  `(400/${len})px`;
            }
            mazeElement.appendChild(cellDiv);
        }
    }
    //mazeElement.innerHTML+=`<button type="button" onclick="result(arr1,arr2)">submit</button>`
    //console.log(arr2)
    
    }
    catch
    {
        soln(len)
    }
 }
 
function find(array, i, j, array1) {
 
    if (i == array.length-1 && j == array[0].length-1) {
        //console.log(array1);
        return array1
    }
   
   
    if (array[i][j + 1] == 0) {
        j += 1;
        //console.log("right");
        array1.push({"dir":"right","i":i,"j":j,"arr":"->"});
        return find(array, i, j, array1);
    }
   
    else if (array[i + 1][j] == 0) {
        i += 1;
        //console.log("down");
        array1.push({"dir":"down","i":i,"j":j,"arr":"|"});
        return find(array, i, j, array1);
    } 
    else if(array[i-1][j]==0){
        i-=1;
        array1.push({"dir":"up","i":i,"j":j,"arr":"|"});
        return find(array, i, j, array1);
    }
    else if(array[i][j-1]==0){
        j-=1;
        array1.push({"dir":"left","i":i,"j":j,"arr":"|"});
        return find(array, i, j, array1);
    }
    else  {
       
if(array[i][j-1]==0)
{
    array1.pop();
    array[i][j]=1;
        return find(array, i, j-1, array1);
 
}
else if(array[i-1][j]==0){
    array1.pop();
    array[i][j]=1;
        return find(array, i-1, j, array1);
}
       
else if(array[i][j+1]==0)
    {
        array1.pop();
        array[i][j]=1;
            return find(array, i, j+1, array1);
     
    }
    else{
        array1.pop();
        array[i][j]=1;
            return find(array, i+1, j, array1);
    }
         
    }
}
function result()
{
    console.log(arr1)
    
    const mazeElement = document.getElementById("maze");
    mazeElement.innerHTML = ''; 

    
    mazeElement.style.gridTemplateColumns = `repeat(${arr1.length}, $(400/arr1.length)px)`;
    mazeElement.style.width = `${arr1.length* 500}px`;
g=0;h=0;f=0;
    for (let l = 0; l < arr1.length; l++) {
        for (let k = 0; k < arr1[0].length; k++) {
            cellDiv = document.createElement('div');
            if (arr1[l][k] === 0) {
                cellDiv.className = 'space';
                if(arr2[g].dir=="right" && l==arr2[g].i && k==arr2[g].j)
                    {
                        cellDiv.style.backgroundColor = "green";
                        console.log(cellDiv.textContent);
                        g++;
                
                    }
                    else if(arr2[g].dir=="down" && l==arr2[g].i && k==arr2[g].j)
                    {
                        cellDiv.style.backgroundColor = "green";
                        console.log(cellDiv.textContent);
                        g++;
                    
        
                    }
                else{

                }
            } else {
                cellDiv.className = 'wall';
            }
            if(l==0 && k==0)
            {
                cellDiv.style.backgroundColor = "green";
            }
            mazeElement.appendChild(cellDiv);
        }
    }

    
}

soln(8)
 
 