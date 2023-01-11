package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsLikes
 * Information about the videos that this user has liked.
**/
public class OnDemandSeasonUserMetadataConnectionsLikes {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsLikes withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsLikes withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsLikes withUri(String uri) {
        this.uri = uri;
        return this;
    }
}