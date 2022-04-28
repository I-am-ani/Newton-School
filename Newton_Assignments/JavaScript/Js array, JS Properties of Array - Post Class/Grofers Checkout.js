// Html

{/* <table>        
        <tr>
            <td>1</td>
            <td>Item-2</td>
            <td data-ns-test="price">18361</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Item-2</td>
            <td data-ns-test="price">18361</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Item-3</td>
            <td data-ns-test="price">17373</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Item-4</td>
            <td data-ns-test="price">17361</td>
        </tr>
        <tr>
            <td data-ns-test="grandTotal" colspan="3">total</td>
        </tr>
    </table> */}


// js

let price = document.querySelectorAll('[data-ns-test="price"]');
let total = document.querySelector('[data-ns-test="grandTotal"]')
let sum = 0;

for(let i=0; i<price.length; i++){
sum+=+price[i].innerHTML;
}
 
 total.innerHTML = sum;