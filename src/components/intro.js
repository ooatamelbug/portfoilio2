import React, {Component} from 'react';
import axios from 'axios';
import './font.css';

class Intro extends Component{
    constructor(props){
        super();   this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/user/',
            data : {
                id:"",
                name: "",
                image:"",
                linked_in:"",
                email:"",
                git:"",
                cv: "",
                job_title: "",
                text_desc: "",
                face: "",
                tweeter: "",
                resume: ""
            }        
        }
    }
    componentDidMount(){
        axios.get(this.state.endpoint)
        .then(edu=>{
            if(edu){
                this.setState({
                    data: edu.data[0]
                });
            }
        }).catch(err=>{
            if (err) {
                console.log(err);
            }
        })
    }
    render(){
        let dataface = this.state.data.face !== "" ? 
             (
                <li><a href={this.state.data.face} ><i className="fa fa-facebook-official"></i></a></li>
            )
            : null;
        let dataresume = this.state.data.resume !== "" ? 
            (
                <li><a href={this.state.data.resume} ><i className="fa fa-vcard-o"></i></a></li>
            )
            : null;
        let datatweeter = this.state.data.tweeter !== "" ? 
            (
                <li><a href={this.state.data.tweeter} ><i className="fa fa-twitter-square"></i></a></li>
            )
            : null;

        return(
                <section className="intro-section" style={{height: "625px"}} >
                    <div className="container">
                        <div className="heading-wrapper">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="info">
                                        <i className="fa fa-location-arrow"></i>
                                        <div className="right-area">
                                            <h5>Sohag</h5>
                                            <h5>Sohag - Egypt</h5>
                                        </div>{/*<!-- right-area -->*/}
                                    </div>{/*<!-- info -->*/}
                                </div>{/*<!-- col-sm-4 -->*/}
                                
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="info">
                                        <i className="fa fa-phone"></i>
                                        <div className="right-area">
                                            <h5>01019952727</h5>
                                            <h6>SUN - WNS,8AM - 8PM</h6>
                                        </div>{/*<!-- right-area -->*/}
                                    </div>{/*<!-- info -->*/}
                                </div>{/*<!-- col-sm-4 -->*/}
                                
                                <div className="col-sm-6 col-md-6 col-lg-4">
                                    <div className="info">
                                        <i className="fa fa-envelope-open-o"></i>
                                        <div className="right-area">
                                            <h5>{this.state.data.email}</h5>
                                            <h6>REPLY IN 24 HOURS</h6>
                                        </div>{/*<!-- right-area -->*/}
                                    </div>{/*<!-- info -->*/}
                                </div>{/*<!-- col-sm-4 -->*/}
                            </div>{/*<!-- row -->*/}
                        </div>{/*<!-- heading-wrapper -->*/}
                        
                    
                        <div className="intro" style={{margin:"100px"}} >
                            <div className="row">
                                <div className="col-sm-8 col-md-4 col-lg-3">
                                    <div className="profile-img margin-b-30">
                                        <img src={this.state.data.image} style={{with:"212px",height:"255px"}} alt=""/>
                                    </div>
                                </div>{/*<!-- col-sm-8 -->*/}
                                
                                <div className="col-sm-10 col-md-5 col-lg-6">		
                                        <h2><b>{this.state.data.name}</b></h2>
                                        <h4 className="font-yellow">{this.state.data.job_title}</h4>
                                        <ul className="information margin-tb-30">
                                            <li><b className="font-yellow">BORN</b> : Oct 2, 1993</li>
                                            <li><b className="font-yellow">EMAIL</b> : {this.state.data.email}</li>
                                            <li><b className="font-yellow"></b> {this.state.data.text_desc}</li>
                                        </ul>
                                        <ul className="social-icons">
                                            <li><a href={this.state.data.git} ><i className="fa fa-github"></i></a></li>
                                            <li><a href={this.state.data.linked_in} ><i className="fa fa-linkedin-square"></i></a></li>
                                            {dataface}
                                            {datatweeter}
                                            {dataresume}
                                        </ul>
                                </div>{/*<!-- col-sm-8 -->*/}
                                
                                <div className="col-sm-10 col-md-3 col-lg-3">
                                    <a className="downlad-btn" href={this.state.data.cv} >Download CV</a>
                                </div>{/*<!-- col-lg-2 -->*/}
                        
                            </div>{/*<!-- row -->*/}
                        
                        </div>{/*<!-- intro -->*/}
                    </div>{/*<!-- container -->*/}
                </section>//{/*<!-- intro-section -->*/}
        )
    }
}

export default Intro;
