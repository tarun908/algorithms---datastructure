function Matrix(rows, columns) {
     var jaggedarray = new Array(rows);
     for (var i=0; i < columns; i +=1) {
     jaggedarray[i]=new Array(rows);
     }
     return jaggedarray;
     }
     console.log(Matrix(3,3));
     var matrix3by3 = [[1,2,3],[4,5,6],[7,8,9]];
     matrix3by3[0]; // [1,2,3]
      matrix3by3[1]; // [4,5,6]
     matrix3by3[1]; // [7,8,9]
    
     matrix3by3[0][0]; // 1
      matrix3by3[0][1]; // 2
     matrix3by3[0][2]; // 3
    
     matrix3by3[1][0]; // 4
     matrix3by3[1][1]; 
     matrix3by3[1][2]; // 6
     matrix3by3[2][0]; // 7
     matrix3by3[2][1]; // 8
     matrix3by3[2][2]; // 