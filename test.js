var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a-b);
    let sum = 0;
    let closes = nums[0] + nums[1] + nums[2];

    for(let i = 0; i < nums.length - 2; i++){
        let j = i + 1;
        let k = nums.length - 1;

        while(j < k){
            sum = nums[i] + nums[j] + nums[k];

            if(sum === target){
                return sum;
            }
            if(Math.abs(target - sum) < Math.abs(target - closes)){
                closes = sum;
            }
            
            if (sum < target){
                j++;
            }else{
                k--;
            } 
        }
    }

    return closes;
};




console.log(threeSumClosest([1, 1, 1, 0], -100)) // -100
console.log(threeSumClosest([-1,2,1,-4], 1)) // 2
console.log(threeSumClosest([0, 0, 0, 0], 1)) // 0
console.log(threeSumClosest([0,1,2], 0)) // 3

