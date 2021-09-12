import { useContext } from 'react'
import '../customCSS.css'
import QuizSession from './QuizSession';
import { QuizContext } from './HomePage';
function RightSection() {
    const value=useContext(QuizContext)
    const {quizData,arrLength,quizType,updateQuizeType}=value
    
// dividing quizdata for each section
  const firstQuizeData=quizData?.slice(0,arrLength/3)
  const secondQuizeData=quizData?.slice(arrLength/3,arrLength/3*2)
  const thirdQuizeData= quizData?.slice(arrLength/3*2)
        if(quizType===1){
            return <QuizSession quizType={1} data={firstQuizeData}  />
        }
       else if(quizType===2){
            return <QuizSession quizType={2} data={secondQuizeData} />
        }
       else if(quizType===3){
            return <QuizSession quizType={3} data={thirdQuizeData} />
        }
    
    
    if(!quizData[3]){
        return (<div>Loading</div>)
    }
    
    return (<>
   
        <div className='quiz-card'>
            <div className="quiz-btn flex flex-col items-center ">
                <h1 className='  mt-[10%] text-2xl font-medium '> Quiz 1</h1>
                      <button onClick={()=>updateQuizeType(1)} className="start-btn">
                    Start</button>

                </div>
             
                <div className="quiz-btn flex flex-col items-center ">
                <h1 className='  mt-[10%] text-2xl font-medium '>Quiz 2</h1>
                <button onClick={()=>updateQuizeType(2)} className="start-btn">
                    
                    Start</button>
                </div>

                <div className="quiz-btn flex flex-col items-center ">
                <h1 className='  mt-[10%] text-2xl font-medium '>Quiz 3</h1>
                <button onClick={()=>updateQuizeType(3)} className="start-btn">Start</button>
                </div>
        </div></>
    )
}

export default RightSection
