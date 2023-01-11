package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandVideoMetadataInteractionsLikes
 * Information about the user's Like interactions with this video.
**/
public class OnDemandVideoMetadataInteractionsLikes {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandVideoMetadataInteractionsLikes withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandVideoMetadataInteractionsLikes withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandVideoMetadataInteractionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}