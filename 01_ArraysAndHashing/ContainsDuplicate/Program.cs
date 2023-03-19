public class Program
{
    /*
    Given an integer array nums, return true if any value 
    appears at least twice in the array, and return false if 
    every element is distinct.
    */
    public static void Main(string[] args)
    {
        //Example 1
        //var nums = new int[] {1,2,3,1};

        //Example 2
        //var nums = new int[] {1,2,3,4};

        //Example 3
        var nums = new int[] {1,1,1,3,3,4,3,2,4,2};

        var hasDuplicate = ContainsDuplicate(nums);
        Console.WriteLine(hasDuplicate);
    }
   public static bool ContainsDuplicate(int[] nums) 
   {
        var numberDictionary = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            if (numberDictionary.ContainsKey(nums[i]))
            {
                return true;
            }
            else
            {
                numberDictionary.Add(nums[i], 1);
            }
        }
        return false; 
   }
}