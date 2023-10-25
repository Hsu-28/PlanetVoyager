import { createStore } from 'vuex'

// const baseURL =process.env.NODE_ENV === "development"? "/": "https://tibamef2e.com/cgd103/g1/api";


//中央狀態管理
const publicURL = process.env.NODE_ENV === 'development' ? '' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager'
const phpPublicPath = process.env.NODE_ENV === 'development' ? 'http://localhost/PV/PlanetVoyager/public/php/' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager/php/'
const publicPath = process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''

const TeamPic = process.env.NODE_ENV === 'development' ? 'http://localhost/PV/PlanetVoyager/src/assets/image/teamMembers/memberSvg/' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager/img/'



export default createStore({
  state: {
    siteLoading: false,
    apiURL: '',
    publicURL: publicURL,
    phpPublicPath: phpPublicPath,
    publicPath: publicPath,
    TeamPic:TeamPic,
    userName:'',
    isLogin: false,
  },
  getters: {
  },
  mutations: {
    updateSiteLoad(state, value) {
      state.siteLoading = value
    },
    setUserName(state, id) {
      state.userName = id;
    },
    setLoginState(state, boolean){
      state.isLogin = boolean;
    }
  },
  actions: {
  },
  modules: {

  }
})
