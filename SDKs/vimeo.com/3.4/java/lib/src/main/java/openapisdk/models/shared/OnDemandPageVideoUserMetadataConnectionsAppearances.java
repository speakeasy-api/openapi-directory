package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class OnDemandPageVideoUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}