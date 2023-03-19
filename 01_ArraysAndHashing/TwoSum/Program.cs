public class Program
{
    public static void Main(string[] args)
    {
        /*
        Given an array of integers nums and an integer target,
        return indices of the two numbers such that they add 
        up to target.
        You may assume that each input would have exactly one 
        solution, and you may not use the same element twice.

        You can return the answer in any order.
        */
        
        //Test case 1
        //var nums = new int[] {2,7,11,15};
        //var target = 9;

        //Test case 2
        var nums = new int[] {3,2,4};
        var target = 6;

        //Test case 3
        //var nums = new int[] {3,3};
        //var target = 6;
        var sumIndices = TwoSum(nums, target);

        foreach(var index in sumIndices)
        {
            Console.WriteLine(index);
        }
    }

    public static int[] TwoSum(int[] nums, int target) 
    {
        var numberDictionary = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++)
        {
            var num = nums[i];
            if (numberDictionary.ContainsKey(target - num))
            {
                return new int[] {numberDictionary[target - num], i};
            }
            else if (numberDictionary.ContainsKey(num))
            {
                continue;
            }
            else
            {
                numberDictionary.Add(num, i);
            }
        }
        return null;
    }
}