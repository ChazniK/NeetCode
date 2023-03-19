public class Program
{
    /*
    Given two strings s and t, return true if t is an anagram of s,
    and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters 
    of a different word or phrase, typically using all the original letters
    exactly once.
    */
    public static void Main(string[] args)
    {
        var s = "anagram";
        var t = "nagaram";

        var isAnagram = IsAnagram(s, t); 
        Console.WriteLine(isAnagram);
    }

    public static bool IsAnagram(string s, string t) 
    {
        var firstWordDictionary = new Dictionary<char, int>();

        if (s.Length != t.Length)
        {
            return false;
        }
        
        for (int i = 0; i < s.Length; i++)
        {
            var letter = s[i];
            if (firstWordDictionary.ContainsKey(letter))
            {
                firstWordDictionary[letter] += 1;
            }
            else
            {
                firstWordDictionary.Add(letter, 1);
            }
        }

        for (int i = 0; i < t.Length; i++)
        {
            var letter = t[i];

            if (!firstWordDictionary.ContainsKey(letter))
            {
                return false;
            }
            else if (firstWordDictionary[letter] > 1)
            {
                firstWordDictionary[letter] -= 1;
            }
            else
            {
                firstWordDictionary.Remove(letter);
            }
        }

        return firstWordDictionary.Count == 0;
    }
}
