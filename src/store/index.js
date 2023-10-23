import { createStore } from 'vuex'

// const baseURL =process.env.NODE_ENV === "development"? "/": "https://tibamef2e.com/cgd103/g1/api";


//中央狀態管理
const publicURL = process.env.NODE_ENV === 'development' ? '' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager'
const phpPublicPath = process.env.NODE_ENV === 'development' ? 'http://localhost/PV/PlanetVoyager/public/php/' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager/php/'
const Pic = process.env.NODE_ENV === 'development' ? 'http://localhost/PV/PlanetVoyager/src/assets/image/' : 'https://tibamef2e.com/chd103/g3/PlanetVoyager/img/'
const publicPath = process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''



export default createStore({
  state: {
    siteLoading: false,
    apiURL: '',
    publicURL: publicURL,
    phpPublicPath: phpPublicPath,
    publicPath: publicPath,
    Pic:Pic,
    userName:'',
    
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
  },
  actions: {
  },
  modules: {

  }
})
