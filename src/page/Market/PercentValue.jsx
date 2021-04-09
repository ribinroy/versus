import { ReactComponent as ArrowDown } from './../../assets/svg/arrow down.svg';
const Value = ({ value, margin }) => {
    return (
        <div className={'value_wrap ' + (margin === '+' ? 'green' : 'red')}>
            <ArrowDown />
            {value}
        </div>
    );
};

export default Value;
