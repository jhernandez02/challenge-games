function game01(M,N){
    let a;
    let b;
    let next = true;
    for(let i=0; i<M.length; i++){
        if(!next)
            break;
        const temp = M.filter((item, index)=>index!=i);
        for(let t of temp){
            if (M[i]+t==N){
                a = M[i];
                b = t;
                next = false;
                break;
            }
        }
    }
    return [a,b];
}

const result = game01([2, 5, 8, 14, 0], 10);
console.log(result);