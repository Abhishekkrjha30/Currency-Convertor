/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useId } from "react";


const InpuBox = ({
  lable,amount,onAmountChange,onCurrencyChange,currencyOptions=[],
  selectCurrency="usd",amountDisable=false,currencyDisable=false,
  className="",}) => {

    const amountInputId = useId()

  return (
    <>
    <div className={`bg-white rounded-lg p-4 flex text-sm ${className}`}>
      <div className="w-1/2">
          <label htmlFor={amountInputId}
          className="text-black/40 text-lg mb-2 inline-block">
               {lable}
          </label>
          <input type="number" placeholder="Amount" disabled={amountDisable} value={amount}
          id={amountInputId}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                 className="outline-none w-full bg-transparent py-1.5 text-lg"
           />

           
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 text-lg mb-2 w-full ">
                  Currency Type
          </p>
          <select 
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            className="rounded-lg px-1 py-1 text-lg bg-gray-100 cursor-pointer outline-none"
            >
                     {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}

          </select>

      </div>

    </div>
    
    </>
     
  )
}

export default InpuBox;