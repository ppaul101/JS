window.onload = function() {

  var a = [[1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]]

  console.log(rotateImage(a))

}


function rotateImage(a)
{
  // TEST: rotating outermost edge

  var n = a.length

  var innerLayers = n/2

  if (n&2 !== 0)
  {
    // odd
    innerLayers = (n-1)/2
  }

  // in nested loop - outside first loop?
  // 4x, just need a dummy var

  // for (var i = 0; i<2; i++)
  // {
  //
  //   var temp1 = a[i][i]
  //   var temp2 = 0
  //
  //   // top row
  //   for (var j = 0; j<n-1 ; j++)
  //   {
  //     temp2 = a[i][j+1]
  //     a[i][j+1] = temp1
  //     temp1 = temp2
  //   }
  //
  //   // RHC
  //   for (var j = 0; j<n-1; j++)
  //   {
  //     // a[0][n-1] <-- corner is already done above
  //     temp2 = a[j+1][n-(i+1)]
  //     a[j+1][n-(i+1)] = temp1
  //     temp1 = temp2
  //   }
  //
  //   // btm row
  //   for (var j = n-1; j>=1 ; j--)
  //   {
  //     temp2 = a[n-(i+1)][j-1]
  //     a[n-(i+1)][j-1] = temp1
  //     temp1 = temp2
  //   }
  //
  //   // LHC
  //   for (var j = n-2; j>= 0; j--)
  //   {
  //     // n-2 as btm corner already done
  //     temp2 = a[j][i]
  //     a[j][i] = temp1
  //     temp1 = temp2
  //   }
  // }

  a = rotateLayer(0, 3, a.length, a)
  a = rotateLayer(1, 1, 3, a)

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
