function getSecondLargest(nums) {
    // Complete the function
    //remove duplicates by converting array into a set and back into an array
    nums = [...new Set(nums)]; 
    //sort the array in descending order
    nums.sort((a,b) => b-a)
    //get the second largest
    return nums[1]
}


console.log(getSecondLargest([1,2,3,4,5,5,4,3]))