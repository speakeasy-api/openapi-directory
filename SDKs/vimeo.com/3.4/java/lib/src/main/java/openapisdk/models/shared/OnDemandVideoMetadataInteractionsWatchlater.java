package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandVideoMetadataInteractionsWatchlater
 * Information about the user's Watch Later interactions with this video.
**/
public class OnDemandVideoMetadataInteractionsWatchlater {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandVideoMetadataInteractionsWatchlater withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandVideoMetadataInteractionsWatchlater withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandVideoMetadataInteractionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}