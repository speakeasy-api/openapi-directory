package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandGenreMetadataConnectionsPages
 * Information about the On Demand pages related to this group.
**/
public class OnDemandGenreMetadataConnectionsPages {
    @JsonProperty("options")
    public String[] options;
    public OnDemandGenreMetadataConnectionsPages withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandGenreMetadataConnectionsPages withUri(String uri) {
        this.uri = uri;
        return this;
    }
}