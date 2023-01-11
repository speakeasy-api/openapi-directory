package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataConnectionsPictures
 * Information about this video's thumbnails.
**/
public class VideoMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public VideoMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public VideoMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}