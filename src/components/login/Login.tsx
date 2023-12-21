import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import StepOneForm from '../step-one-form/StepOneForm';
import StepTwoForm from '../step-two-form/StepTwoForm';
import Popup from '../popup/Popup';
import { isValidEmail } from '../../utils/helpers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const history = useHistory();
  
  let buttonPressTimer: string | number | NodeJS.Timeout | undefined;

  const isValidForm = () => {
    if(validEmail && isChecked) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }

  useEffect(() => isValidForm());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;

    if (isValidEmail(emailValue)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    setEmail(emailValue);
  }

  const handleCheckboxChange = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const checkboxValue = event.currentTarget.checked;

    if (checkboxValue) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }

  const handleButtonPress = () => {
    buttonPressTimer = setTimeout(() => {
      console.log('long press activated')
      history.push("/login/step-2");
    }, 500);
  }
  
  const handleButtonRelease = () => {
    clearTimeout(buttonPressTimer);
  }

  const handleClickBack = () => {
    history.push("/login/step-1");
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rawResponse = await fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    });
    const res = await rawResponse.json();
    
    if(res.ok) {
      setSuccess(true);
      setIsPopupOpen(true);
    } else {
      setSuccess(false);
      setIsPopupOpen(false);
    }
    
    setEmail('');
    setIsChecked(false);
  }
  
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login/step-1" />} />
      <Route exact path="/login" render={() => <Redirect to="/login/step-1" />} />
      <Route path="/login/step-1">
        <StepOneForm 
          inputValue={email}
          checkboxValue={isChecked}
          onFormInputChange={handleInputChange}
          onCheckboxChange={handleCheckboxChange}
          onTouchStartEvent={handleButtonPress} 
          onTouchEndEvent={handleButtonRelease} 
          onMouseDownEvent={handleButtonPress}
          onMouseUpEvent={handleButtonRelease}
          onMouseLeaveEvent={handleButtonRelease}
          enabled={!enabled}
        />
      </Route>
      <Route path="/login/step-2">
        <StepTwoForm 
          inputValue={email}
          onButtonClickBack={handleClickBack}
          onSubmit={handleSubmit}
        />
        <Popup isSuccess={success} isOpen={isPopupOpen} setState={setIsPopupOpen} />
      </Route>
    </Switch>
  )
}

export default Login;