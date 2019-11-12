function getTallestPerson() {
    var promise = new Promise( (resolve, reject) => {
          setTimeout(() => resolve(123), 1000)
     })
     return promise;
  }
  
  function getUserDetails(studentId) {
    var promise = new Promise( (resolve, reject) => {
          setTimeout(() => resolve({
                                    id: studentId,
                                    name: 'John',
                                    company: 'clairvoyant'
                             }), 1000)
     })
     return promise;
  }

  function getUser() {
    let studentIdPromise = getTallestPerson();
    studentIdPromise.then( (studentId) => {
        return getUserDetails(studentId);
    })
    .then( (userDetails) => {
        console.log('userDetails', userDetails);
    }) 
  }
  
  getUser();