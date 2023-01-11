package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsWatched
 * Information about removing this video from the user's list of watched videos.
**/
public class OnDemandPageVideoMetadataInteractionsWatched {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageVideoMetadataInteractionsWatched withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandPageVideoMetadataInteractionsWatched withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataInteractionsWatched withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsWatched withUri(String uri) {
        this.uri = uri;
        return this;
    }
}