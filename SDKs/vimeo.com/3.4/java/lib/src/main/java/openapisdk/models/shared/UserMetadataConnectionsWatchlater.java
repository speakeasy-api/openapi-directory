package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsWatchlater
 * Information about the videos that this user wants to watch later.
**/
public class UserMetadataConnectionsWatchlater {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsWatchlater withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}