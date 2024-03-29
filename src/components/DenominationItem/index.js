// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithdrawal} = props
  const {value} = denominationDetails

  const withdraw = () => {
    onWithdrawal(value)
  }

  return (
    <li className="listed-btn">
      <button className="withdraw-btn" type="button" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
