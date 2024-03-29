import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawal = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile-pic">
              <h1 className="icon">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>

          <div className="balance-container">
            <p className="blc-name">Your Balance</p>
            <div className="rupees-container">
              <p className="available-balance">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>

          <p className="withdrawal">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominationDetails={each}
                key={each.id}
                onWithdrawal={this.onWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
