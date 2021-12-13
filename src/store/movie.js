import axios from 'axios'
export default{
    // modules
    namespaced:true,
    // data
    state:{
        loading:false,
        message:'',
        movies:[]
    },
    // computed
    // methods
    mutations:{
        updateState(state,payload){
            Object.keys(payload).forEach( key=> state[key]=payload[key] )
        },
        resetMovie(state){
            state.movie=[]
        }
    },
    actions:{
        async searchMovies({commit}, payload){
            const { title, type, number, year }=payload
            const OMDB_API_KEY='7035c60c';
            const res=await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            console.log(res)
            // data: {Search: Array(10), totalResults: '277', Response: 'True'}
            // 0: {Title: 'Frozen', Year: '2013', imdbID: 'tt2294629', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BM
            const { Search, totalResults }=res.data
            commit('updateState',{
                movies:Search
            })          
        }
    }
}