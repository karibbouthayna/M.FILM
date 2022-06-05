/** 
* @swagger
* /api/movie/search/:search:
*    get:
*      description: Returns movie
*      responses:
*        200:
*         description: Hello Movie
*/

const Search = () => {
    const dispatch = useDispatch();
    const general = useSelector(state => state.general);
    const movies = useSelector(state => state.movies);
    const { query } = useRouter();
  
    const searchTerm = query[QUERY_PARAMS.SEARCH_TERM];
    const page = Number(query[QUERY_PARAMS.PAGE]);
  
    useEffect(() => {
      return () => {
        dispatch(clearMovies());
      };
    }, [dispatch]);
  
    useEffect(() => {
   
      if (checkEmptyObject(query)) return;
  
      const initialSearchTerm = Router.query[QUERY_PARAMS.SEARCH_TERM];
      const initialPage = Router.query[QUERY_PARAMS.PAGE];
   
      if (!initialPage) {
        const newPage = 1;
        const newSearchTerm = initialSearchTerm;
        console.log('[Search useEffect] query parameter update: newSearchTerm, newPage => ', newSearchTerm, newPage);
        Router.replace({
          pathname: LINKS.SEARCH.HREF,
          query: {
            [QUERY_PARAMS.SEARCH_TERM]: newSearchTerm,
            [QUERY_PARAMS.PAGE]: newPage
          }
        });
      }
    }, [dispatch, query]);
    
    useEffect(() => {
      if (!searchTerm || !page) return;
  
      scroll.scrollToTop({smooth: true});
  
      dispatch(getSearchMovies(searchTerm, page));
    }, [searchTerm, page, dispatch]);
  
    if (movies.loading) {
      return <Loader />;
    } else if (movies.total_results === 0) {
      return (
        <NotFound
          title='Sorry!'
          subtitle={`There were no results for ${searchTerm}...`} />
      );
    } else {
      const { secure_base_url: baseUrl } = general.base.images;
    }}