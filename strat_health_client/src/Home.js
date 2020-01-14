import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

function Home(props) {

    let hospital_data = <div></div>;
    
    if (props.loginData.hospital_list){
        if(props.loginData.hospital_list.length>0){
        hospital_data = props.loginData.hospital_list.map((eachHospital)=>{
            return(                
                <div id="hospital_container" key={eachHospital.id}>
                    <h2 id="hospital_name" className="center_text"> {eachHospital.hospital_name}</h2>
                    <h3 id="hospital_address" className="center_text"> {eachHospital.hospital_address}</h3>
                    <div id="hospital_staff">
                        <h4>Staff</h4>
                        
                        <p>Average Salary: {eachHospital.salary_average}</p>
                        <p>Highest Paid Staff: {eachHospital.highest_paid_staff}</p>
                    </div>
                    <div id="hospital_procedure">
                        <h4>Procedures</h4>
                        {eachHospital.number_of_procedures > 0?
                            (<div>
                                <p>Average Procedure: {eachHospital.avg_procedure_cost}</p>
                                <p>Highest Procedure: {eachHospital.highest_cost_procedure}</p>
                                <p>Number of Procedures: {eachHospital.number_of_procedures}</p>
                            </div>): (<div>None</div>)}
                    </div>
                </div>
            )
        })
        }
        else{
            hospital_data = <h3 id="zero_hospitals">No hospitals attached to this user.</h3>
        }
    }

    return (
        //Test this above the inside of return
        <div id="home_container">
        {/* The 1st grid to style the entire page is above */}

            <div className="header" id="logo_header">
                <h2 >Strategic Health</h2>
            </div>

            <div className="header" id="home_top_right">
                <h4>Logged in as {props.loginData.name}</h4><Link to="/">Log Out</Link>
            </div>

            {/* 2nd grid to dynamically list all of the hospitals */}
                <div id="home_form">

                    {/* Using a dictionary of all hospitals with their information provided. */}
                    {hospital_data}

                    <div id="home_footer">
                        <p>Created By <a href="https://www.linkedin.com/in/kenngibbs/" target="_blank"  rel="noopener noreferrer">Kenn Gibbs</a></p>
                    </div>

                </div>

        </div>
    )
};

export default Home;