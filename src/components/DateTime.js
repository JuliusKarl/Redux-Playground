import React, { Component } from 'react';

class DateTime extends Component {
    render() {
        let tempDate = new Date();
        let day = tempDate.getDate();
        let month = (tempDate.getMonth()+1) ;
        let year = tempDate.getFullYear();
        let hours = (tempDate.getHours() == '0' ? 12 : (tempDate.getHours() > 12 ? tempDate.getHours() - 12 : tempDate.getHours()));
        let minutes = tempDate.getMinutes();
        let ampm = (tempDate.getHours() > 12 ? 'PM' : 'AM');
        const date =  day + '/' 
                    + month + '/' 
                    + year + ' ' 
                    + hours +':'
                    + minutes
                    + ampm;
        return (
            <div>
                <small>
                    <small 
                        className="text-muted">
                            {date}
                    </small>
                </small>
            </div>
        );
    }
}

export default DateTime;