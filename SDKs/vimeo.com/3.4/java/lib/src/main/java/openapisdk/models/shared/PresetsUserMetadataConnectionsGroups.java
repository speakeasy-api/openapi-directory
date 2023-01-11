package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsGroups
 * Information about the groups created by this user.
**/
public class PresetsUserMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}