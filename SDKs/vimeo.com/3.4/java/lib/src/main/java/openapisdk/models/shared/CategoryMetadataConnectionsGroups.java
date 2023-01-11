package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataConnectionsGroups
 * Information about the groups related to this category.
**/
public class CategoryMetadataConnectionsGroups {
    @JsonProperty("options")
    public String[] options;
    public CategoryMetadataConnectionsGroups withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CategoryMetadataConnectionsGroups withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryMetadataConnectionsGroups withUri(String uri) {
        this.uri = uri;
        return this;
    }
}