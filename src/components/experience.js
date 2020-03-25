import React, {Component} from 'react';
import axios from 'axios';

class Exper extends Component{
    constructor(props){
        super();
        this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/workhistory/',
            data : []
        }
    }
    componentDidMount(){
        axios.get(this.state.endpoint)
        .then(edu=>{
            if(edu){
                this.setState({
                    data: edu.data
                });
            }
        }).catch(err=>{
            if (err) {
                console.log(err);
            }
        })
    }
    render(){
        let data = this.state.data.map(expeer=>{
            let arraydata = expeer.technology.split(',');
            let datad = arraydata.map(arr=>{
                return <li className="info col-md-4">{arr}</li>
            })
            return (
                    <div className="experience margin-b-50" key={expeer.id} >
                        <h4><b>{expeer.name}</b></h4>
                        <h5 className="font-yellow"><b>{expeer.company}</b></h5>
                        <h6 className="font-lite-black margin-t-10">{expeer.pariod}</h6>
                        <p className="margin-tb-30">{expeer.desc}</p>
                        <ul className="list margin-b-30">
                           {datad} 
                        </ul>
                    </div>//{/*<!-- experience -->*/}
                )
        })
        return(
                <section className="experience-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="heading">
                                    <h3><b>Work Experience</b></h3>
                                    <h6 className="font-lite-black"><b>PREVIOUS JOBS</b></h6>
                                </div>
                            </div>{/*<!-- col-sm-3 -->*/}
                            <div className="col-sm-12 col-md-9">
                                {data}
                            </div>{/*<!-- col-sm-9 -->*/}
                        </div>{/*<!-- row -->*/}
                    </div>{/*<!-- container -->*/}
                </section>//{/*<!-- experience-section -->*/}
                
        )
    }
}

export default Exper;
