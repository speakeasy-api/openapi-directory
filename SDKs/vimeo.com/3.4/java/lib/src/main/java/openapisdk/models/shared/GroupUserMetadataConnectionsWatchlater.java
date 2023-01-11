package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsWatchlater
 * Information about the videos that this user wants to watch later.
**/
public class GroupUserMetadataConnectionsWatchlater {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsWatchlater withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsWatchlater withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsWatchlater withUri(String uri) {
        this.uri = uri;
        return this;
    }
}