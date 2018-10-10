// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
// Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.


window.onload = function()
{

  s = "ngrhhqbhnsipkcoqjyviikvxbxyphsnjpdxkhtadltsuxbfbrkof"

  console.log(firstNotRepeatingCharacter(s))

  // answer in this case is 'g'

}


function firstNotRepeatingCharacter(s)
{

  var alphabetArr = new Array(26)

  for (var k = 0; k<alphabetArr.length; k++)
  {
    alphabetArr[k] = {positionInString:0, count:0}
  }

  for (var i = 0; i<s.length; i++)
  {
    alphabetArr[s[i].charCodeAt(0) - 97].positionInString = i
    alphabetArr[s[i].charCodeAt(0) - 97].count++
  }

  // return alphabetArr

  var changed = false
  var currLowest = s.length + 1

  for (var j = 0; j<alphabetArr.length; j++)
  {
    // only appears once
    if (alphabetArr[j].count === 1 && alphabetArr[j].positionInString<currLowest)
    {
      currLowest = alphabetArr[j].positionInString
      changed = true
    }

  }

  if (changed)
  {
    return s[currLowest]
  }

  // no repeating
  return "_"
}
