import './ExpenseItem.css';

function ExpenseItem(){
    return(
        <div className='expense-item'>
            <div>February, 2, 2023</div>
            <div className='expense-item__description'>
                <h2>Pet Insurance</h2>
                <div className='expense-item__price'>$200.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;