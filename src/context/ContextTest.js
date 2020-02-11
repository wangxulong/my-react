import React from "react"

const nameEn = "wangxulong";
const nameCn = "王旭龙";

const LocalContext = React.createContext(nameCn);
class LocalProvider extends React.Component{

    state = {
        name: nameCn
    }

    toggle = ()=>{
        const name = this.state.name === nameCn?nameEn:nameCn;
        this.setState({
            name:name
        })
    }


    render() {
        return (
            <div>
                <LocalContext.Provider value={this.state.name}>
                    <button onClick={this.toggle}>
                        名字切换
                    </button>
                    {this.props.children}
                </LocalContext.Provider>
            </div>
        );
    }


}

class LocalConsumer extends React.Component{

    render(){
        return (

            <LocalContext.Consumer>
                {
                    name =>{

                        return  <div>{name}</div>
                    }
                }
            </LocalContext.Consumer>
        );
    }
}

export default ()=>{

   return  <div>
        <LocalProvider>
            <div>测试context</div>
            <LocalConsumer/>
        </LocalProvider>
    </div>
}