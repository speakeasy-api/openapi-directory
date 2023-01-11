package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class OnDemandSeasonUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}