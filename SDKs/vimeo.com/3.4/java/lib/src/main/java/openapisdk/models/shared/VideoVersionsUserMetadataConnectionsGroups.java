package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class VideoVersionsUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}