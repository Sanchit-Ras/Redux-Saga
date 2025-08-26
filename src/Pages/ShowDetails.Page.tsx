import {useEffect, type FC } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { type WithRouterProps } from "../hocs/withRouter";
import { connect, type ConnectedProps } from "react-redux";
import type { State } from "../store";
import { showsMapSelector } from "../selectors/shows";
import { loadShowAction } from "../slices/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
import { personMapSelector, personSelector } from "../selectors/Cast";
import { loadCastAction } from "../slices/cast";

type ShowDetailPageProps = WithRouterProps & ReduxProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({params,show,loadShow,loadCast,persons}) => {
  useEffect(()=>{
    loadShow(+params.showId);
    loadCast(+params.showId);
  },[params.showId])
  if(!show){
    return <LoadingSpinner/>
  }
  if(!show.cast){
    return <LoadingSpinner/>
  }
  return (
    <div className="mt-2">
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.map((genre)=><GenrePill name={genre} key={genre}/>)}
      </div>
      <div className="mt-2 flex">
        <img
          src={show.image?.medium || "https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"}
          alt={show.name}
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>
            {show.summary}
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {show.cast.map((person_id)=>{
            const avatarLink=persons[person_id].image?.medium || "https://wallpapers.com/images/hd/placeholder-profile-silhouette-xdnyaoc18kf2jfyp.png";
            const name=persons[person_id].name;
            return <CastCard key={person_id} avatarLink={avatarLink} name={name}/>
            })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps=(state:State,ownProps:WithRouterProps)=>({
  show:showsMapSelector(state)[+ownProps.params.showId],
  persons:personMapSelector(state)
})
const mapDispatchToProps={
  loadShow:loadShowAction,
  loadCast:loadCastAction
}
const connector=connect(mapStateToProps,mapDispatchToProps);

type ReduxProps=ConnectedProps<typeof connector>;//the props which redux is providing

export default withRouter(connector(ShowDetailPage));