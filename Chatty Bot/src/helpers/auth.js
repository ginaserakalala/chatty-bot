import { auth } from "../services/firebase";

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email,password);
}

export function signin(email,password) {
  return auth().signInWithEmailAndPassword(email,password);
}
/*Creating an instance of the googleauthprovider and calling sign in with pop up with the provider as a parameter*/
export function signInWithGoogle(){
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
}

/*Creating a new method and instance of githubauthprovider*/
export function signInWithGitHub(){
  const provider = new auth.GithubAuthProvider();
  return auth.signInWithPopup(provider);
}

export function logout() {
  return auth().signOut();
}
