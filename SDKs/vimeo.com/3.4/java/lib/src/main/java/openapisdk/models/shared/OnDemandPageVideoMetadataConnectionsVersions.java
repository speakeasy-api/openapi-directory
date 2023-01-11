package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoMetadataConnectionsVersions
 * Information about the versions of this video.
**/
public class OnDemandPageVideoMetadataConnectionsVersions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_uri")
    public String currentUri;
    public OnDemandPageVideoMetadataConnectionsVersions withCurrentUri(String currentUri) {
        this.currentUri = currentUri;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsVersions withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsVersions withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsVersions withUri(String uri) {
        this.uri = uri;
        return this;
    }
}