// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.


window.onload = function()
{

  var a = [2,2]

  console.log(firstDuplicate(a))


}


function firstDuplicate(a)
{
  // a is an array

  var b = new Array(a.length+1).fill(0)
  console.log(b)

  for (var i = 0; i<a.length; i++)
  {
    b[a[i]]++

    if (b[a[i]] >= 2)
    {
      return a[i]
    }
  }

  return -1

}
