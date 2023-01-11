package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataConnectionsVideos
 * Information about the videos related to this category.
**/
public class CategoryMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public CategoryMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CategoryMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}