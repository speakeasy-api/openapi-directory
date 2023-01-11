package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class PresetsUserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}