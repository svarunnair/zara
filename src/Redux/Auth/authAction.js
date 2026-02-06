import axios from "axios"



export const POST_AUTH_REQUIEST="POST_AUTH_REQUIEST"
export const POST_AUTH_SUCCESS="POST_AUTH_SUCCESS"
export const POST_AUTH_FAILURE="POST_AUTH_FAILURE"

export const POST_SIGNUP_REQUIEST="POST_SIGNUP_REQUIEST"
export const POST_SIGNUP_SUCCESS="POST_SIGNUP_SUCCESS"
export const POST_SIGNUP_FAILURE="POST_SIGNUP_FAILURE"

export const GET_SIGNUP_REQUIEST="GET_SIGNUP_REQUIEST"
export const GET_SIGNUP_SUCCESS="GET_SIGNUP_SUCCESS"
export const GET_SIGNUP_FAILURE="GET_SIGNUP_FAILURE"



const postAuthRequiest=()=>{
    return({
        type:POST_AUTH_REQUIEST
    })
}
const postAuthSuccess=(data)=>{
    return({
        type:POST_AUTH_SUCCESS,
        payload:data
    })
}
const postAuthFailure=()=>{
    return({
        type:POST_AUTH_FAILURE
    })
}

const postSignupRequiest=()=>{
    return({
        type:POST_SIGNUP_REQUIEST
    })
}
const postSignupSuccess=(data)=>{
    return({
        type:POST_SIGNUP_SUCCESS,
        payload:data
    })
}
const postSignupFailure=()=>{
    return({
        type:POST_SIGNUP_FAILURE
    })
}

const getSignupRequiest=()=>{
    return({
        type:GET_SIGNUP_REQUIEST
    })
}
const getSignupSuccess=(data)=>{
    return({
        type:GET_SIGNUP_SUCCESS,
        payload:data
    })
}
const getSignupFailure=()=>{
    return({
        type:GET_SIGNUP_FAILURE
    })
}










export const postAuth=(data)=>(dispatch)=>{
    dispatch(postAuthRequiest())
    return axios({
        url:"https://reqres.in/api/login",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postAuthSuccess(res.data))
        console.log("postAuth")
        localStorage.setItem("token",res.data.token)
    })
    .catch((error)=>{
        dispatch(postAuthFailure())
    })
}

export const postSignup=(data)=>(dispatch)=>{
    dispatch(postSignupRequiest())
    return axios({
        url:"http://localhost:8000/signup",
        method:"POST",
        data
    })
    .then((res)=>{
        dispatch(postSignupSuccess(res.data))
        console.log("postSignup")
        localStorage.setItem("token",res.data.token)
    })
    .catch((error)=>{
        dispatch(postSignupFailure())
    })
}

export const getSignup=()=>(dispatch)=>{
    dispatch(getSignupRequiest())
    return axios({
        url:"http://localhost:8000/signup",
        method:"GET",
      
    })
    .then((res)=>{
        dispatch(getSignupSuccess(res.data))
        console.log("getSignup",res.data)
    })
    .catch((error)=>{
        dispatch(getSignupFailure())
    })
}    