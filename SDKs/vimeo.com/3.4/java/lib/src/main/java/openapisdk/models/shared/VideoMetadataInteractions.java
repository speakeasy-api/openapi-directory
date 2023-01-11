package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadataInteractions
 * A list of resource URIs related to the video.
**/
public class VideoMetadataInteractions {
    @JsonProperty("buy")
    public VideoMetadataInteractionsBuy buy;
    public VideoMetadataInteractions withBuy(VideoMetadataInteractionsBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonProperty("channel")
    public VideoMetadataInteractionsChannel channel;
    public VideoMetadataInteractions withChannel(VideoMetadataInteractionsChannel channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("like")
    public VideoMetadataInteractionsLike like;
    public VideoMetadataInteractions withLike(VideoMetadataInteractionsLike like) {
        this.like = like;
        return this;
    }
    @JsonProperty("rent")
    public VideoMetadataInteractionsRent rent;
    public VideoMetadataInteractions withRent(VideoMetadataInteractionsRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonProperty("report")
    public VideoMetadataInteractionsReport report;
    public VideoMetadataInteractions withReport(VideoMetadataInteractionsReport report) {
        this.report = report;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscribe")
    public VideoMetadataInteractionsSubscribe subscribe;
    public VideoMetadataInteractions withSubscribe(VideoMetadataInteractionsSubscribe subscribe) {
        this.subscribe = subscribe;
        return this;
    }
    @JsonProperty("watched")
    public VideoMetadataInteractionsWatched watched;
    public VideoMetadataInteractions withWatched(VideoMetadataInteractionsWatched watched) {
        this.watched = watched;
        return this;
    }
    @JsonProperty("watchlater")
    public VideoMetadataInteractionsWatchlater watchlater;
    public VideoMetadataInteractions withWatchlater(VideoMetadataInteractionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}