// import { useEffect } from 'react';
// import { getRedirectResult, signInWithRedirect } from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.component.styles.scss';

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     // console.log(response);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
