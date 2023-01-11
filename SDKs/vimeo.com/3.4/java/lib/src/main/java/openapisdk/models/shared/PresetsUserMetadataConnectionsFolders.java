package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class PresetsUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}