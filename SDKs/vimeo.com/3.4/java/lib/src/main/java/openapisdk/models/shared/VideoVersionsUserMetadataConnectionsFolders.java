package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class VideoVersionsUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoVersionsUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}