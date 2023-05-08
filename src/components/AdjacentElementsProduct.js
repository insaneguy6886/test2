import { useState } from 'react';

function AdjacentElementsProduct () {
    const [numbers, setNumbers] = useState('')
    const [result, setResult] = useState('')

    const findMaxProduct = (arr) => {
        let maxProduct = Number.MIN_SAFE_INTEGER;
        let maxIndex = -1;
        
        for (let i = 0; i < arr.length - 1; i++) {
          const product = arr[i] * arr[i+1]
          if (product > maxProduct) {
            maxProduct = product
            maxIndex = i
          }
        }
    
        return { maxProduct, maxIndex };
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        const arr = numbers.split(',').map(Number)
        const { maxProduct, maxIndex } = findMaxProduct(arr)
        setResult(`${arr[maxIndex]} x ${arr[maxIndex+1]} = ${maxProduct}`)
    }

    return(
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Nhập số (cách nhau dấu phẩy):
        <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} />
      </label>
      <button type="submit">Tìm tích lớn nhất</button>
    </form>
    {result && <p>Tích lớn nhất là: {result}</p>}
  </div>
  )
}

export default AdjacentElementsProduct