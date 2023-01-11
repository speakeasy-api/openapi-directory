package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class OnDemandPageUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}