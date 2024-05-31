import { ReactComponent as StarRating } from "../../assets/images/Star_fill.svg";
import { ReactComponent as StarNoRating } from "../../assets/images/Star.svg";

function Rating({ rating, numberVotes }) {
    return (
        <>
            {numberVotes ? (
                <div className="qa-Rating__container">
                    <StarRating className="qa-Rating__container--star" />
                    <p className="qa-Rating__container--rating">
                        {rating}{" "}
                        <span className="qa-Rating__container--votes">
                            ({numberVotes}{" "}
                            {numberVotes === 1 ? "vote" : "votes"})
                        </span>
                    </p>
                </div>
            ) : (
                <div className="qa-Rating__container">
                    <StarNoRating className="qa-Rating__container--star" />
                    <p className="qa-Rating__container--votes">No ratings</p>
                </div>
            )}
        </>
    );
}

export default Rating;
