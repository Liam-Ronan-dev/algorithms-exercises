/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {

  let swapped = false; // keeps track of whether we made any swaps in a pass

  // Keep looping as long as we're still making swaps
  do {
    swapped = false // at the start of each pass, assume no swaps will happen

    // If you go all the way to nums.length, nums[i + 1] goes out of bounds (undefined).
    for(let i=0; i < nums.length - 1; i++) {
      // compare neighbors
      if(nums[i] > nums[i + 1]) {
        const temp = nums[i]; // save the left number
        nums[i] = nums[i + 1]; // move smaller number to the left
        nums[i + 1] = temp; // move bigger to the right
        
        // Set swapped to true if a swap happens, so outer loop (while) knows to go again
        swapped = true;
      }
    }
  } while(swapped) // Keep looping until no swaps are made in a full pass
    
  return nums;
}


// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
