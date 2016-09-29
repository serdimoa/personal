import * as rebase from 're-base';


class Model {

  getSkills() {
    const base = rebase.createClass({
      apiKey: 'AIzaSyA_oP0jcBJpOJ_cbLOK3JxtPWUbyxc9wkQ',
      authDomain: 'personal-17bfb.firebaseapp.com',
      databaseURL: 'https://personal-17bfb.firebaseio.com',
      storageBucket: 'personal-17bfb.appspot.com',
    });
    let database = base.database();
    const ref = database.ref('./skills', {
      isArray: true,
      then(data) {
        console.log(data);
      },
    });
    return ref;
  }
}
export default Model;
