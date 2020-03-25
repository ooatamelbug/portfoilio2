import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import './port.css';

class Port extends Component{
    constructor(props){
        super();
        this.state = {
            endpoint: 'http://mohamed5544.pythonanywhere.com/api/work/',
            endpoint2: 'http://mohamed5544.pythonanywhere.com/api/type/',
            data : [],
            datatype : []
        }
    }
    componentDidMount(){
        axios.get(this.state.endpoint2)
        .then(typed=>{
            if(typed){
                this.setState({
                    datatype: typed.data
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
        let datatype = this.state.datatype.map(typework=>{
            return (
                <NavLink to="#" key={typework.id} data-filter={"."+typework.slug}><b>{typework.name}</b></NavLink>
            )
        })

        let data = this.state.data.map(work=>{
            return (
                <div className={"aboper p-item "+work.type.slug} >
                    <a key={work.id} href={work.link || '#'} target="_blank" rel="noopener noreferrer" data-fluidbox>
                        <div className="text-center abovep">
                            <p className="above">{work.title}</p>
                        </div>
                        <img src={work.image}  alt="" className="port" />
                    </a>
                 </div>//{/*<!-- p-item -->*/}
            )
        })
        
        return(
            <section className="portfolio-section section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <div className="heading">
                                <h3><b>Portfolio</b></h3>
                                <h6 className="font-lite-black"><b>MY WORK</b></h6>
                            </div>
                        </div>{/*<!-- col-sm-3 -->*/}
                        
                        <div className="col-sm-12 col-md-9">
                            <div className="portfolioFilter clearfix margin-b-80">
                                <NavLink to="#" data-filter="*" className="current"><b>ALL</b></NavLink>
                                {datatype}
                            </div>{/*<!-- portfolioFilter -->*/}
                        </div>{/*<!-- col-sm-8 -->*/}
                    </div>{/*<!-- row -->*/}
                    
                    <div className="portfolioContainer  margin-b-50">
                        {data}           
                    </div>{/*<!-- portfolioContainer -->*/}
                </div>{/*<!-- container -->*/}
            </section> //{/*<!-- portfolio-section -->*/}
                
        )
    }
}

export default Port;
