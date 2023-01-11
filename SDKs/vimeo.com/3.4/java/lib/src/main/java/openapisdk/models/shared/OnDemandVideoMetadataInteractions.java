package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandVideoMetadataInteractions {
    @JsonProperty("likes")
    public OnDemandVideoMetadataInteractionsLikes likes;
    public OnDemandVideoMetadataInteractions withLikes(OnDemandVideoMetadataInteractionsLikes likes) {
        this.likes = likes;
        return this;
    }
    @JsonProperty("watchlater")
    public OnDemandVideoMetadataInteractionsWatchlater watchlater;
    public OnDemandVideoMetadataInteractions withWatchlater(OnDemandVideoMetadataInteractionsWatchlater watchlater) {
        this.watchlater = watchlater;
        return this;
    }
}