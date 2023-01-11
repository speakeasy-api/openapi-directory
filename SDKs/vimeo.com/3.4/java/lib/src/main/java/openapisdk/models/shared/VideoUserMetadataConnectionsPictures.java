package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class VideoUserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoUserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}