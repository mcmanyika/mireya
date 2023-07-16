import PackOne from './packages/PackOne'
import PackTwo from './packages/PackTwo'
import PackThree from './packages/PackThree'
import PackFour from './packages/PackFour'
import PackFive from './packages/PackFive'
import PackSix from './packages/PackSix'
import PackSeven from './packages/PackSeven'
import PackEight from './packages/PackEight'


function Packages() {
  return (
    <div>
        <PackOne title='Sales' />
        <PackTwo title='Virtual Assistance' />
        <PackThree title='Outbound' /> 
        <PackFour title='Phone Support' /> 
        <PackFive title='Scheduling' /> 
        <PackSix title='Order Processing' /> 
        <PackSeven title='Logistics and Shipping' />  
        <PackEight title='Chat/Email and Webinar' />    
    </div>
  )
}

export default Packages