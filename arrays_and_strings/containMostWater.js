var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let current = Math.min(height[left], height[right]) * (right - left);

    if (current > max) {
      max = current;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};


//we use the two pointer method in order to find the max area within the array. 
// we have a current variable that is used to find the minimum of both heights, (which give us our height) and multiply that by the current right - left (which gives us our width)
//then we check if current is greater than max, we replace max.
//then we go on with moving our pointers. if the height at the left is smaller then the right on the right, we will then move our left pointer. else viceversa.