

function LeftSection(props) {
   

  
    return (
        <div className="h-full flex flex-col place-content-between text-white  mx-3">
          <div className=' my-4'>
              <h1 className=" text-3xl ">Quizz</h1>
              <p className="my-2">Introducing ‘Trade Brains Portal’.Easiest Stock Learning
                   for Fundamental Analysis</p>
          </div>
          <div className="my-8 md:mb-32">
              <div className="">
                  <h1 className="text-2xl font-medium">Question </h1>
                 {props.quizType!==0?
                 <h1 className="text-xl mt-3">
                     {props.activeQstn.activeQuestion+1} /{props.activeQstn.Qlength}
                     </h1>:''}
              </div>
              
          </div>
        </div>
    )
}

export default LeftSection
