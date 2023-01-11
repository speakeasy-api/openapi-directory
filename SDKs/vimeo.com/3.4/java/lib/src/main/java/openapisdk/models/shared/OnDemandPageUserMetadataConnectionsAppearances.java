package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class OnDemandPageUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}