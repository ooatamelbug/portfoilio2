import React, {Component} from 'react';

class Footer extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <footer>
                <p className="copyright">
                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i className="fa fa-heart" aria-hidden="true"></i> for Mohamed 18
                    {/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}
                </p>
            </footer>
        )
    }
}

export default Footer;
