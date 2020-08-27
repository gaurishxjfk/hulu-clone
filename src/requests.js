const API_KEY = "3cc82a2bdba6c5377f6a231a6b58c5ab";

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
};
