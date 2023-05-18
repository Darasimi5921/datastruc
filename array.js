// function for calculating non-overlapping sum of two array

function findSum(A, B, n) {
	// Insert elements of both arrays
	let cash = new Map();
	for (let i = 0; i < n; i++) {
		if (cash.has(A[i]))
			cash.set(A[i], 1 + cash.get(A[i]));
		else
			cash.set(A[i], 1);

		if (cash.has(B[i]))
			cash.set(B[i], 1 + cash.get(B[i]));
		else
			cash.set(B[i], 1);
	}

	// calculate non-overlapped sum
	let sum = 0;
	for (let entry of cash) {
		if (parseInt((entry[1]).toString()) == 1)
			sum += parseInt((entry[0]).toString());
	}

	return sum;

}

// Driver code

let A = [3, 1, 7, 9];
let B = [2, 4, 1, 9, 3];

// size of array
let n = A.length;

// function call
document.write(findSum(A, B, n));
