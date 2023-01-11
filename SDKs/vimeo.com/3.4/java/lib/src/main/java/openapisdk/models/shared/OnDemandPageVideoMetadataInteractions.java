package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoMetadataInteractions
 * A list of resource URIs related to the video.
**/
public class OnDemandPageVideoMetadataInteractions {
    @JsonProperty("buy")
    public OnDemandPageVideoMetadataInteractionsBuy buy;
    public OnDemandPageVideoMetadataInteractions withBuy(OnDemandPageVideoMetadataInteractionsBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonProperty("channel")
    public OnDemandPageVideoMetadataInteractionsChannel channel;
    public OnDemandPageVideoMetadataInteractions withChannel(OnDemandPageVideoMetadataInteractionsChannel channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("like")
    public OnDemandPageVideoMetadataInteractionsLike like;
    public OnDemandPageVideoMetadataInteractions withLike(OnDemandPageVideoMetadataInteractionsLike like) {
        this.like = like;
        return this;
    }
    @JsonProperty("rent")
    public OnDemandPageVideoMetadataInteractionsRent rent;
    public OnDemandPageVideoMetadataInteractions withRent(OnDemandPageVideoMetadataInteractionsRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonProperty("report")
    public OnDemandPageVideoMetadataInteractionsReport report;
    public OnDemandPageVideoMetadataInteractions withReport(OnDemandPageVideoMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribe")
    public OnDemandPageVideoMetadataInteractionsSubscribe subscribe;
    public OnDemandPageVideoMetadataInteractions withSubscribe(OnDemandPageVideoMetadataInteractionsSubscribe subscribe) {
        this.subscribe = subscribe;
        return this;
    }
    @JsonProperty("watched")
    public OnDemandPageVideoMetadataInteractionsWatched watched;
    public OnDemandPageVideoMetadataInteractions withWatched(OnDemandPageVideoMetadataInteractionsWatched watched) {
        this.watched = watched;
        return this;
    }
    @JsonProperty("watchlater")
    public OnDemandPageVideoMetadataInteractionsWatchlater watchlater;
    public OnDemandPageVideoMetadataInteractions withWatchlater(OnDemandPageVideoMetadataInteractionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}