import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "0fc5ab59-9999-42ca-9a0e-4e8db059ea1e"
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
    profileUser(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}
export  const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status: status})
    }

}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    }
}
