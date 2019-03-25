
const axios = require('axios')

exports.getMyCm = (req,res,next) => {

    axios.get(`http://localhost:3002/'`,{
        headers: {
            Authorization:`Bearer ${state.token}`
        }})
      .then(res=>{
       res.data.user
       res.render('member/ads014', {
 
        oldInput: {
          list: res.data.list,
        },
        validationErrors: []
      });
      
      }).catch(err=>{
        next(err);
      })

}


