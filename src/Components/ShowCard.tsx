import { Link } from "react-router-dom";
import type { Show } from "../models/shows";

function ShowCard(props:Show) {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={props.image?.medium || "https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{props.name}</h2>
          <p>
            {props.summary}
          </p>
        </div>
        <Link
          to={"/show/"+props.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
