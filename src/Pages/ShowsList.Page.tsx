import { useEffect, type FC } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { queryChangeAction } from "../slices/shows";
import {connect, type ConnectedProps} from 'react-redux';
import type { State } from "../store";
import { querySelector, showsLoadingSelector, showsSelector } from "../selectors/shows";
import LoadingSpinner from "../Components/LoadingSpinner";
type ShowListPageProps=ReduxProps;
const ShowsListPage:FC<ShowListPageProps>=({shows,query,queryChanged,loading})=> {
  
  return (
    <div className="mt-2">
      <div className="flex items-center">
        <div className="grow">
            <SearchBar value={query} onChange={(event)=>{queryChanged(event.target.value)}}/>
        </div>
          {loading && <LoadingSpinner/>}
      </div>
      {shows &&<div className="flex flex-wrap justify-center">
        {shows.map((show)=><ShowCard key={show.id} {...show}/>)}
      </div>}
    </div>
  );
}
const mapStateToProps=(State:State)=>({
  shows:showsSelector(State),
  query:querySelector(State),
  loading:showsLoadingSelector(State)
})
const mapDispatchToProps={
  queryChanged:queryChangeAction
}
const connector=connect(mapStateToProps,mapDispatchToProps);
type ReduxProps=ConnectedProps<typeof connector>
export default connector(ShowsListPage);
