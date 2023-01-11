package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsUsersWithAccess
 * Information about the user privacy of this video, if the video privacy is `users`.
**/
public class OnDemandPageVideoMetadataConnectionsUsersWithAccess {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsUsersWithAccess withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsUsersWithAccess withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsUsersWithAccess withUri(String uri) {
        this.uri = uri;
        return this;
    }
}