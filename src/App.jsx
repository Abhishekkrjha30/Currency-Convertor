/* eslint-disable no-unused-vars */
import { useState } from "react"
import { InpuBox } from "./component"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
const App = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const  currencyInfo =useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);

  const swap=()=>{
       setFrom(to);
       setTo(from);
       setConvertedAmount(amount);
       setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (

    <>
    <div 
       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
       style={{backgroundImage:`url('https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-50 rounded-lg p-10 backdrop-blur-sm bg-white/30 ">
          <form onSubmit={(e)=>{
             e.preventDefault()
             convert();
            }}>
              <div className="w-full mb-2">
                <InpuBox
                  lable="Form"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>{
                    setFrom(currency)
                  }}
                  selectCurrency={from}
                  onAmountChange={(amount)=>{
                    setAmount(amount)
                  }}
                />

              </div>
              <div className="relative w-full h-1">
                <button
                   type='button'
                   className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  border-white rounded-md bg-blue-600 text-white px-3 py-2 font-medium "
                   onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InpuBox
                  lable="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency)=>{
                    setTo(currency)
                  }}
                  selectCurrency={to}
                  amountDisable
                />

              </div>
              <button type="submit"
                className="w-full bg-blue-600 text-white text-lg font-semibold px-4 py-3 rounded-lg mt-2"
              >
                 Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            
          </form>

          </div>

        </div>
    </div>
    
    </>
    
  )
}

export default App