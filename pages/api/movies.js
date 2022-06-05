import clientPromise from "../../lib/mongodb";
import ClientPromise from "../../lib/mongodb";
/** 
* @swagger
* /api/movies:
*    get:
*      description: Returns movies
*      responses:
*        200:
*         description: Hello Movies
*/
export default function Movies({ movies }) {
    return 
      
  }
  
  export async function getServerSideProps() {
    const { db } = await connectToDatabase();
  
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
  
    return {
      props: {
        movies: JSON.parse(JSON.stringify(movies)),
      },
    };
  }








   