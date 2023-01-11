package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsWatched
 * Information about removing this video from the user's list of watched videos.
**/
public class VideoMetadataInteractionsWatched {
    @JsonProperty("added")
    public Boolean added;
    public VideoMetadataInteractionsWatched withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public VideoMetadataInteractionsWatched withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataInteractionsWatched withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsWatched withUri(String uri) {
        this.uri = uri;
        return this;
    }
}