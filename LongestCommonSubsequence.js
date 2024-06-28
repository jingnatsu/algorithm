function findLCS(X, Y) {
    const m = X.length;
    const n = Y.length;
    const L = new Array(m).fill(0).map(() => new Array(n).fill());
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(X[i-1] === Y[j-1]) {
                L[i][j] = L[i-1][j-1] + 1;
            }
            else {
                L[i][j] = Math.max(L[i-1][j], L[i][j-1]);
            }
        }
    }

    const lengthLCS = L[m][n];

    let i = m;
    let j = n;
    let res = "";
    while (i > 0 && j > 0) {
        if(X[i-1] === Y[j-1]) {
            res = X[j-1] + res;
            i--;
            j--;
        } else if (L[i-1][j] > L[i][j-1]) {
            i--;
        } else {
            j--;
        }
    }

    return res;

}

const X = "ABCD";
const Y = "ACDF";
const lcs = findLCS(X, Y);
console.log(lcs); 