package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class OnDemandSeasonUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public OnDemandSeasonUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandSeasonUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandSeasonUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}