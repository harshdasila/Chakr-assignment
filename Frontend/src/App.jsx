import Leftpanel from './components/Leftpanel'
import Revenue from './components/Revenue'
import LostDeals from './components/LostDeals'
import QuaterGoal from './components/QuaterGoal'
import Customers from './components/Customers'
import Growth from './components/Growth'
import DateCard from './components/DateCard'
import Topbuyer from './components/Topbuyer'
import Chats from './components/Chats'
import States from './components/States'
import NewDeals from './components/NewDeals'

function App() {

  return (
    <div className='bg-[#F6F6F3] rounded-[32px] p-[4px] gap-[16px]'>
      <div className='flex p-[16px] gap-[16px]'>
        <Leftpanel/>
        <div className='gap-[16px]'>
          <div className='flex gap-[16px]'>
            <Revenue/>
            <LostDeals/>
            <QuaterGoal/>
          </div>
          <div className='flex gap-[16px] h-[400px]'>
            <Customers/>
            <div className='w-[557px] h-[400px] mt-[1rem]'>
              <div>
                <Growth/>
              </div>
              <div className='flex h-[128] gap-[16px]'>
                <DateCard heading="Top month" time="November" subHeading="2019" subHeadingColor={'#FFA500'}/>
                <DateCard heading="Top year" time="2023" subHeading="96k sold so far" subHeadingColor={'#454545'}/>
                <Topbuyer/>
              </div>
            </div>
          </div>
          <div className='flex h-[256px] gap-[16px] mt-[35px]'>
            <Chats/>
            <States/>
            <NewDeals/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
