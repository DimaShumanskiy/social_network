import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "4420f286-461f-4679-94b2-47e2c1fba2fd"
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data
        })
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    profileUser(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}
export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}
