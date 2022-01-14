
import MovieCard from "components/Navbar/MovieCard";
import Pagination from "components/Navbar/Pagination";

function Listing() {

    return (
        <>

            <Pagination />

            <div className="container">
                <div className="row">

                    <div className="col-sm-6 col-lg-4 col-xl-3">

                        <MovieCard />

                    </div>
                </div>
            </div>



        </>
    )
}
export default Listing;