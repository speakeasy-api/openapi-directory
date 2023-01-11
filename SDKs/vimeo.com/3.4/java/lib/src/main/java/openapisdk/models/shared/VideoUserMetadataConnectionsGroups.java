package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class VideoUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}