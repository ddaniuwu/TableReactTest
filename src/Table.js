import React from "react";
import {Table} from 'react-bootstrap'

class AtmosphereDataTable extends React.Component{
  
    render(){
       
        return(
            <div>
            <Table>
                <thead>
                    <tr>
                        <th>_Id</th>
                        <th>cityid</th>
                        <th>name</th>
                        <th>state</th>
                        <th>probabillityofprecip</th>
                        <th>relativehumidity</th>
                        <th>Lasreporttime fromato (YYYY/MM/DD)</th>
                        <th>if</th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    className="FormatBody" 
                    onLoad={ fetch("https://api.datos.gob.mx/v1/condiciones-atmosfericas")
        .then (request => request.json() 
        .then(
            (cityid) => {
                 cityid.results.map( function (itemid){
                   return console.log("id:" +itemid.cityid , "name:"+itemid.name, "state:"+itemid.state )                  
                })
            
            })
            )}
            >
                      
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </Table>
            </div>
        )
    }

}

export default AtmosphereDataTable;