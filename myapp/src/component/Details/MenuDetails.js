
import React from 'react';



class MenuDetails extends React.Component {

    constructor(props) {
        super();
        this.state = {

        }
    }

    renderData = (menuData) => {
      return  menuData.map(item => {
            console.log('item', item)

            return (
                <div key={item.menu_id}>
                    <div className='col-md-7'>
                        <b>{item.menu_id}</b>
                        &nbsp;
                        <img src={item.menu_image} alt={item.menu_name} style={{width:80, height:80}}/>
                        &nbsp;
                        {item.menu_name} - Rs.{item.menu_price} 
                    </div>
                    <div className="col-md-4">
                                <button className="btn btn-success"
                                onClick={()=>{this.placeOrder(item.menu_id)}}>
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button> &nbsp;
                                <button className="btn btn-danger"
                                onClick={()=>{this.removeOrder(item.menu_id)}}>
                                    <span className="glyphicon glyphicon-minus"></span>
                                </button>
                            </div>
                        
                </div>)
        })

    }
    render() {
        console.log('this.props', this.props)

        return (
            <div>
                <div className='col-md-12 bg-success'>
                    <h2>Item Added</h2>
                    <h3>Item Number</h3>
                </div>
                <div className='col-md-12 bg-info'>
                {this.props.menuData.length>1&&this.renderData(this.props.menuData)}


                </div>

            </div>
        )

    }


}

export default MenuDetails;
