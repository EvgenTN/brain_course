import React from 'react';
import './style.css';


export default props => {
    return (
        <div className='modals'> 
            <form>
                <p>Are you sure?</p>
                <button  
                    className='btn btn-success'
                    onClick={props.closeDropdown}
                >
                    Yes
                </button>
                <button  
                    className='btn btn-danger'
                    onClick= {props.closeModal}
                >
                    No
                </button>
            </form>
        </div>
    );
};