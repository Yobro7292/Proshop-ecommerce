import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REMOVE_FAIL, USER_REMOVE_REQUEST, USER_REMOVE_SUCCESS } from "../constants/userConstants.js";

export const userLoginReducer = (state = { }, action) => {

    switch (action.type) {
        case USER_LOGIN_REQUEST:
                return { loading: true, users: [] }
        case USER_LOGIN_SUCCESS:
                return { loading: false, userInfo: action.payload }
        case USER_LOGIN_FAIL:
                return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
                
        default:
            return state;
            
    }
}

export const userRegisterReducer = (state = { }, action) => {

        switch (action.type) {
            case USER_REGISTER_REQUEST:
                    return { loading: true, products: [] }
            case USER_REGISTER_SUCCESS:
                        return { loading: false, userInfo: action.payload}
                  
            case USER_REGISTER_FAIL:
                    return { loading: false, error: action.payload }
                                
            default:
                return state;
                
        }
    }

export const userRemoveReducer = (state = { }, action) => {

        switch (action.type) {
            case USER_REMOVE_REQUEST:
                    return { loading: true, user: [] }
            case USER_REMOVE_SUCCESS:
                    return { loading: false, userInfo: action.payload }
            case USER_REMOVE_FAIL:
                    return { loading: false, error: action.payload }
            default:
                return state;
                
        }
    }