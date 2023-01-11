package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class VideoUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public VideoUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public VideoUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}