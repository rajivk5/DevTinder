var search = (arr, t) => {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (arr[m] === t) return m;

        else if (arr[m] < t) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

}


// console.log(search([1,3,5,6,7],5));





var searchRange = function (arr, t) {

    function findFirst() {
        let l = 0;
        let r = arr.length - 1;
        let ans = -1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (arr[m] >= t) {
                if (arr[m] === t) ans = m;
                r = m - 1
            } else {
                l = m + 1
            }
        }

        return ans;
    }

    function findSecond() {
        let l = 0;
        let r = arr.length - 1;
        let ans = -1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (arr[m] <= t) {
                if (arr[m] === t) ans = m;
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return ans;

    }
    return [findFirst(), findSecond()]
};


// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));





var search = function (arr, t) {
    let l = 0;
    let r = arr.length - 1;



    while (l <= r) {
        let m = Math.floor((l + r) / 2);

        if (arr[m] === t) return m;

        if (arr[l] <= arr[m]) {
            if (t >= arr[l] && t < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1
            }
        } else {
            if (t > arr[m] && t <= arr[r]) {
                l = m + 1
            } else {
                r = m - 1;
            }
        }
    }


    return -1;
};
