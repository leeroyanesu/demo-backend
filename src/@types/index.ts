export interface Account {
  email: string
  password: string

}

export interface Games {
  title:string
  status:boolean
  stats:{
    questions:number
    views:number
    users:number
    publised:boolean
    allowed:boolean
  }
}
