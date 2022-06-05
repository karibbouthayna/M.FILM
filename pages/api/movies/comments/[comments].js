/** 
* @swagger
* /api/movies/Comments/:Comments:
*    post:
*      requestBody:
*         description: Endpoint for adding an comment from a user on a specific movie.
*         content:
*          MFILM:
*            schema:
*              type: object
*              required:
*                - idUser
*                - idMovie
*                - comment
*             properties:
*                idUser:
*                  type: string
*                  description: user identity
*                idMovie:
*                   type: string
*                   description: movie identity
*                comment:
*                   type: string
*                   description: comment to post
*     responses:
*     200:
*      description: Success Response
*     400:
*      description: Error Response
*/


export async function insertComment(sample_mflix, movieID, { content, creatorId }) {
    const comment = {
      content,
      postId: new ObjectId(movieID),
      creatorId,
      createdAt: new Date(),
    };
    const { insertedId } = await db.collection('comments').insertOne(comment);
    comment._id = insertedId;
    return comment;
  }