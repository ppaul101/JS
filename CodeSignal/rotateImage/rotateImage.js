window.onload = function() {

  // var a = [[1,2,3,4],
  // [5,6,7,8],
  // [9,10,11,12],
  // [13,14,15,16]]


  // var a = [[1,2,3,4,5],
  //         [6,7,8,9,10],
  //         [11,12,13,14,15],
  //         [16,17,18,19,20],
  //         [21,22,23,24,25]]


  var a = [[1,2],
          [3,4]]

  console.log(rotateImage(a))

}


function rotateImage(a)
{

  var n = a.length

  var noOfShifts = n-1

  var corner = 0


  // 2 for odd length, 1 for even
  while (a.length%2 === 0 && noOfShifts >= 1 || a.length%2!= 0 && noOfShifts >=2)
  {

    // console.log(corner)
    a = rotateLayer(corner, noOfShifts, n, a)

    n--
    corner++

    noOfShifts = noOfShifts - 2


  }

  return a


}

function rotateLayer(cornerIndex, numberOfShifts, n, a)
{

  // i, j need to start at corner indices

  for (var k = 0; k<numberOfShifts; k++)
  {

    var temp1 = a[cornerIndex][cornerIndex]
    var temp2 = 0

    // top row
    for (var j = cornerIndex; j<n-1 ; j++)
    {
      temp2 = a[cornerIndex][j+1]
      a[cornerIndex][j+1] = temp1
      temp1 = temp2
    }

    // RHC
    for (var j = cornerIndex; j<n-1; j++)
    {
      // a[0][n-1] <-- corner is already done above
      temp2 = a[j+1][n-1]
      a[j+1][n-1] = temp1
      temp1 = temp2
    }

    // btm row
    for (var j = n-1; j>=(cornerIndex+1) ; j--)
    {
      temp2 = a[n-1][j-1]
      a[n-1][j-1] = temp1
      temp1 = temp2
    }

    // LHC
    for (var j = n-2; j>= (cornerIndex+0); j--)
    {
      // n-2 as btm corner already done
      temp2 = a[j][cornerIndex]
      a[j][cornerIndex] = temp1
      temp1 = temp2
    }

  }

  return a

}
