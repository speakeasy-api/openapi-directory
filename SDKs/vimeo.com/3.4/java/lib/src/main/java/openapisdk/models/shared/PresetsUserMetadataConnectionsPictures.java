package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class PresetsUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}