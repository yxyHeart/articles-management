import './index.scss'
import Bar from '@/components/Bar'


function Home (){
    return (
      <div>
        <Bar 
        title='主流框架使用满意度'
        xData={['react','vue','angular']}
        yData={[30,40,20]}
        style={{width:"500px",height:'400px'}}
        />
        <Bar 
        title='主流框架使用满意度'
        xData={['react','vue','angular']}
        yData={[30,40,60]}
        style={{width:"300px",height:'200px'}}
        />
      </div>  
    )

}
export default Home