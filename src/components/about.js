import React, {Component} from 'react';
import axios from 'axios';
import './progress.css';

class About extends Component{
    constructor(props){
        super();
        this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/language/',
            endpoint2: 'http://mohamed5544.pythonanywhere.com/api/about/',
            data : [],
            about : []
        }
    }
    componentDidMount(){
        axios.get(this.state.endpoint2)
        .then(typed=>{
            if(typed){
                this.setState({
                    about: typed.data
                });
            }
        }).catch(err=>{
            if (err) {
                console.log(err);
            }
        })

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
        let datatype = this.state.about.map(abouttext=>{
            return (
                <div key={abouttext.id}>
                    <p className="margin-b-50">{abouttext.desc_one}</p>
                    <p className="margin-b-50">{abouttext.desc_two}</p>
                    <p className="margin-b-50">{abouttext.desc_three}</p>
                </div>
            )
        })

        let data = this.state.data.map(lang=>{
            return (
                <div className="col-sm-6 col-md-6 col-lg-3" key={lang.id} >
                    <div className="radial-prog-area margin-b-30">
                        <div className="radial-progress" data-prog-percent=".67">
                            <div></div>
                            <h6 className="progress-title">{lang.name}</h6>
                            <div className="progress">
                                <div className="progress-bar info" style={{width:lang.percent+"%", background:"#007bff"}}>{lang.percent}</div>
                            </div>
                        </div>
                    </div>{/*<!-- radial-prog-area-->*/}
                </div>//{/*<!-- col-sm-6-->*/}
            )
        })
        return(
                <section className="about-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="heading">
                                    <h3><b>About me</b></h3>
                                    <h6 className="font-lite-black"><b>PROFESSIONAL PATH</b></h6>
                                </div>
                            </div>{/*<!-- col-sm-3 -->*/}
                            <div className="col-sm-12 col-md-9">
                                {datatype}                                
                                <div className="row">
                                {data}
                                    
                                </div>{/*<!-- row -->*/}
                            </div>{/*<!-- col-sm-9 -->*/}
                        </div>{/*<!-- row -->*/}
                    </div>{/*<!-- container -->*/}
                </section>   //{/*<!-- about-section -->*/}            
        )
    }
}

export default About;
