import { atom } from "jotai"

const userLoggedIn = atom(false)
const userInfos = atom({})

export { userLoggedIn, userInfos }
