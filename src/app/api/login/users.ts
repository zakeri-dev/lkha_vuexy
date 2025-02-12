// ** Fake user data and data type

// ** Please remove below user data and data type in production and verify user with Real Database
export type UserTable = {
  id: number
  name: string
  email: string
  image: string
  password: string
}

// =============== Fake Data ============================

export const users: UserTable[] = [
  {
    id: 1,
    name: 'محمد علوی',
    password: '46537678',
    email: 'spm@mzakeri.ir',
    image: '/images/avatars/avataruser.png'
  }
]
