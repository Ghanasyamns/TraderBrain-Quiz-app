
import { useState,useRef,useContext,useEffect} from "react";
import Result from "./Result";
import { QuizContext } from "./HomePage";

function QuizSession({quizType,data}) {
    const context = useContext(QuizContext)
const [activeQuestion, setActiveQuestion] = useState(0)

const [inputAnswer, setInputAns] = useState(null)
const [points, setPoints] = useState(0);
const [correctAns, setCorrectAns] = useState(0)
const [finish, setFinish] = useState(false)
console.log(data);
// combine options
const radioRef= useRef(null)
useEffect(() => {
context.updateActiveQstn({activeQuestion:activeQuestion,Qlength:data.length})
   
    
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [activeQuestion])



const handleSubmit=()=>{

 //if selected right answer
 

   if( radioRef.current.checked)
   {
       setPoints(points+1)
        setCorrectAns(correctAns+1)

    }
            
   //if selected ans but not correct
    else if(inputAnswer&&!radioRef.current.checked){
        setPoints(points-0.5)

    }

    if(activeQuestion+1!==data.length){
        setActiveQuestion(activeQuestion+1)   

    }

    else if(activeQuestion+1===data.length){
        console.log('last qstn');

        setFinish(true)
        
    }
    radioRef.current.value=null
    
  setInputAns(null)
}



           //  display options
const options=[...(data[activeQuestion]?.incorrect_answers),data[activeQuestion]?.correct_answer]
const displayOptions=options?.map((option,i)=>(
    <div key={i}>
    <input onChange={(e)=>setInputAns(e.target.value)} ref={radioRef}
     className="radio-btn " type="radio"   name="answers" value={option}/>
       <label  htmlFor='optin'>{option}</label><br/>
</div>
))


//display result
if(finish){
    return (
        <div className="relative w-full h-full flex-col px-3">
            <Result Qlength={data.length+1} correctAns={correctAns} /> 
            </div>
    )
}

    return (
        <div className="relative w-full h-full flex-col px-3">
            <div className="text-xl text-blue-800 font-medium">Score :{points}</div>
            {/* question section */}
          <div className=" flex w-full h-[30%] items-center border-b-2">
              <div className=" qst-num ">
                  <h1 className="text-white">{activeQuestion+1}</h1>
                  </div>
              <h1 className="ml-6 text-lg md:text-2xl text-gray-700 ">{data[activeQuestion].question}</h1>
          </div>
          {/* options section */}
          <div className="options">
          <form  className='space-y-5  ' >
        {displayOptions}
             </form>
     
    </div> 
    {/* button section */}
          <div className="w-full h-[20%] flex justify-between items-center px-8">
              <button onClick={()=>{
                
                  activeQuestion!==1?setActiveQuestion(activeQuestion-1):setActiveQuestion(1)
              }} className="sub-prev-btn">Previous</button>
              <button onClick={handleSubmit}  className="sub-prev-btn">
                   {activeQuestion+1!==data.length?'Submit':'Finish'}</button>
            </div>         
        </div>
    )
}

export default QuizSession
