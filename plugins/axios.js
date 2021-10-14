export default function ({ $axios, redirect }) {
  // $axios.onRequest(config => {
  //   console.log('Making request to ' + config.url)
  // })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (!code) {
      // redirect('/error/connection/refused')
      console.log('error/connection/refused 발생')
    }
    // else if(code===400) {
    //   redirect('/error/badRequest')
    // }
    // else if(400 <= code && code < 500) {
    //   redirect('/error/clientErrorResponses')
    // }
    // else if(500 <= code) {
    //   redirect('/error/serverErrorResponses')
    // }
  })
}