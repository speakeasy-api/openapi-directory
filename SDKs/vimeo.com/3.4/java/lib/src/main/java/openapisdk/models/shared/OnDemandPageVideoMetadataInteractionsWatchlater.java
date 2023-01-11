package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsWatchlater
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
public class OnDemandPageVideoMetadataInteractionsWatchlater {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageVideoMetadataInteractionsWatchlater withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandPageVideoMetadataInteractionsWatchlater withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataInteractionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}