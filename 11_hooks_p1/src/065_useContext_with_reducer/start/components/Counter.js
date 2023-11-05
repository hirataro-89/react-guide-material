import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+"/>
            <CounterButton step={2} calcType="-"/>
            <CounterButton step={5} calcType="+"/>
            <CounterButton step={6} calcType="-"/>
        </>
    )
}
export default Counter;