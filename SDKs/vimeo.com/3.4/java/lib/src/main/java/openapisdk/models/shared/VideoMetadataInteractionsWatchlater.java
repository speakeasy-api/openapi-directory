package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsWatchlater
 * Information about whether this video appears on the authenticated user's Watch Later list.
**/
public class VideoMetadataInteractionsWatchlater {
    @JsonProperty("added")
    public Boolean added;
    public VideoMetadataInteractionsWatchlater withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public VideoMetadataInteractionsWatchlater withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataInteractionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}