package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadataConnectionsVersions
 * Information about the versions of this video.
**/
public class VideoMetadataConnectionsVersions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_uri")
    public String currentUri;
    public VideoMetadataConnectionsVersions withCurrentUri(String currentUri) {
        this.currentUri = currentUri;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsVersions withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsVersions withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsVersions withUri(String uri) {
        this.uri = uri;
        return this;
    }
}