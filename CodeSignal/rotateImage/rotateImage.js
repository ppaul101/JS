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

  // in nested loop - outside first loop?
  var temp1 = a[0][0]
  var temp2 = 0

  a[0][0] = a[1][0]

  // top row
  for (var i = 0; i<n-1 ; i++)
  {
    temp2 = a[0][i+1]
    a[0][i+1] = temp1
    temp1 = temp2
  }

  // RHC
  for (var i = 0; i<n-1; i++)
  {
    // a[0][n-1] <-- corner is already done above
    temp2 = a[i+1][n-1]
    a[i+1][n-1] = temp1
    temp1 = temp2
  }

  // btm row
  for (var i = n-1; i>=1 ; i--)
  {
    temp2 = a[n-1][i-1]
    a[n-1][i-1] = temp1
    temp1 = temp2
  }

  // LHC
  for (var i = n-2; i>= 0; i--)
  {
    // n-2 as btm corner already done
    temp2 = a[i][0]
    a[i][0] = temp1
    temp1 = temp2
  }

  return a


}
