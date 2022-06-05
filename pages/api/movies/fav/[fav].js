
/** 
* @swagger
* /api/movie/fav/:fav:
*    get:
*      description: Returns movie
*      responses:
*        200:
*         description: Hello Movie
*/

movies.get('/add_movie', function (req, res, next) {
    res.render('add_movie', {});
});