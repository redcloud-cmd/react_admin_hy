父组件通过 属性 = 值 的形式来传递给子组件数据
子组件通过props参数来获取父组件传递过来的数据


<MainBanner banners= {banners} />
class MainBanner extends Component{
    constructor(props)(
        super(props)
        this.state = {}
    )
    render(){
        this.state
       const {banners} =  this.props
    }
}

对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：
如果项目中默认继承了Flow或者Typescript，那么直接就可以进行类型验证
但是，即使我们没有使用Flow或者TS，也可以通过prop-types库来进行参数验证
import PropTypes from 'prop-types'
MainBanner.propTypes = {
    banners:propTypes.string.isRequired
    title:propTypes.string
}