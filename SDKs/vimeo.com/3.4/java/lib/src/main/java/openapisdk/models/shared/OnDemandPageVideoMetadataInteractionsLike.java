package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsLike
 * Information about whether the authenticated user has liked this video.
**/
public class OnDemandPageVideoMetadataInteractionsLike {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandPageVideoMetadataInteractionsLike withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public OnDemandPageVideoMetadataInteractionsLike withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataInteractionsLike withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsLike withUri(String uri) {
        this.uri = uri;
        return this;
    }
}