package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataConnectionsPictures
 * Information about this video's thumbnails.
**/
public class OnDemandPageVideoMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageVideoMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageVideoMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}