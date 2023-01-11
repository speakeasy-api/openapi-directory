package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsLike
 * Information about whether the authenticated user has liked this video.
**/
public class VideoMetadataInteractionsLike {
    @JsonProperty("added")
    public Boolean added;
    public VideoMetadataInteractionsLike withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public VideoMetadataInteractionsLike withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataInteractionsLike withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsLike withUri(String uri) {
        this.uri = uri;
        return this;
    }
}