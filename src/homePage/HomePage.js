import axios from "axios"
import { useEffect,useState,createContext } from "react"
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

 export const QuizContext = createContext({});

function HomePage() {
    const [quizData, setQuizData] = useState([])
    const [quizType, setQuizType] = useState(0)
    const [activeQstn,setActiveQstn] =useState({})
    const updateQuizeType=(type)=>{
        if(quizType!==5)
        setQuizType(type)
    }
    const updateActiveQstn=(type)=>{
        if(quizType!==5)
        setActiveQstn(type)
    }

    let arrLength=quizData?.length;
    useEffect(() => {
       const url='https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple'
       const getData= async() => {
        const respData= await axios.get(url)
       setQuizData(respData.data.results)
       
        }
        getData()
        
    }, [quizType])
    
    
    
    return (
        <QuizContext.Provider  value={{quizData:quizData,arrLength,quizType,updateQuizeType,updateActiveQstn}}>
        <div className="h-screen w-screen md:pt-[100px] bg-gray-300">
           <div className=" h-full md:w-[85%] md:h-[85%]  md:mx-auto md:my-auto ">
               <div className="flex flex-col h-full md:flex-row">
                <div className="md:w-[35%]  bg-green-600">
                    <LeftSection quizType={quizType} activeQstn={activeQstn}/>
                </div>
                <div className=" w-full md:min-w-[50%] h-full bg-white ">
                    <RightSection/>
                </div>
               </div>
           </div>
        </div>
        </QuizContext.Provider>
    )
}

export default HomePage
