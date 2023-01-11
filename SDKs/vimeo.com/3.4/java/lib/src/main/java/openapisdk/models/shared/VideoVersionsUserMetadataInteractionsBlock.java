package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class VideoVersionsUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public VideoVersionsUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public VideoVersionsUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}