package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class OnDemandPageUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}