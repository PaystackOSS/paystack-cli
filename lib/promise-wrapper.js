const wrapper = promise => (
    promise
      .then(data => ([  null,data ]))
      .catch(error => ([error]))
  );
  
  module.exports = wrapper;