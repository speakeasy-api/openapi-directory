package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsFolders
 * Information about this user's folders.
**/
public class VideoUserMetadataConnectionsFolders {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsFolders withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsFolders withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsFolders withUri(String uri) {
        this.uri = uri;
        return this;
    }
}