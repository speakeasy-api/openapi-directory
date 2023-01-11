package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class PresetsUserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}