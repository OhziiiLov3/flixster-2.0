
import "../styles/LoadMoreButton.css";

const LoadMoreButton = ({onClick, hasMore}) => {
if(!hasMore){
    return <p className="end-message">You've loaded all the movies!</p>
}
    return ( 
        <button className="load-more" onClick={onClick}>
            Load More
        </button>
     );
}
 
export default LoadMoreButton;