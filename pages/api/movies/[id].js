/**
* @swagger
* /api/movies/:id:
*    get:

*     responses:
*       200:
*        description: Success Response
*       400:
*        description: Error Response
*/

export default function handler(req, res) {
    const { movieId } = req.query;
    if (movieId) {
    res.json({ status: 200, data: {message: "Success"} });
    }
    else {
    res.json({ status: 400, data: {message: "Error"} });
    }
    }
    