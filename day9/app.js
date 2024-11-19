class TellMe
{
    constructor(maybe)
    {
        this.numbers=maybe;
    }
    getFirstNumber()
    {
        return this.numbers[0];
    }
    getNumberofOddNumbers()  {
        const result  = this.numbers.filter(num => num%2 != 0);
        return result.length;
    }
    

}
let y=[2,3,5,8,11];
let z = new TellMe(y);
console.log(z.getFirstNumber());
console.log(z.getNumberofOddNumbers());