
export default function({ $axios, redirect }: any) {

  $axios.onResponse((res: any) => {
    let config:any = res.config
    console.log(`method: ${config.method}, url: ${config.url}, res: `, res.data)
    return res.data
  })

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect("/400")
    }
  })
}
