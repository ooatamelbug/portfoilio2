import React, {Component} from 'react';
import axios from 'axios';

class Edu extends Component{
    constructor(props){
        super();
        this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/education/',
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
        let data = this.state.data.map(education=>{
            return (
                <div className="education-wrapper" key={education.id}>
                    <div className="education margin-b-50">
                        <h4><b>{education.title}</b></h4>
                        <h5 className="font-yellow"><b>{education.place}</b></h5>
                        <h6 className="font-lite-black margin-t-10">{education.pariod}</h6>
                        <p className="margin-tb-30">{education.desc}</p>
                    </div>{/*<!-- education -->*/}
                </div>//{/*<!-- education-wrapper -->*/}
            )
        })
        return(
                <section className="education-section section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <div className="heading">
                                    <h3><b>Education</b></h3>
                                    <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                                </div>
                            </div>{/*<!-- col-sm-3 -->*/}
                            
                            <div className="col-sm-12 col-md-9">
                            {
                                data           
                            }
                                    
                            </div>{/*<!-- col-sm-9 -->*/}
                        </div>{/*<!-- row -->*/}
                    </div>{/*<!-- container -->*/}
                    
                </section> //{/*<!-- education-section -->*/}
        )
    }
}

export default Edu;
