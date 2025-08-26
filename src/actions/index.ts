export type ActionCreator<T>=(...args:any)=>{
    type:string,
    payload:T
}