package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataConnectionsChannels
 * Information about the channels related to this category.
**/
public class CategoryMetadataConnectionsChannels {
    @JsonProperty("options")
    public String[] options;
    public CategoryMetadataConnectionsChannels withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CategoryMetadataConnectionsChannels withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryMetadataConnectionsChannels withUri(String uri) {
        this.uri = uri;
        return this;
    }
}