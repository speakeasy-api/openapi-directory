package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataConnectionsUsers
 * Information about the users related to this category.
**/
public class CategoryMetadataConnectionsUsers {
    @JsonProperty("options")
    public String[] options;
    public CategoryMetadataConnectionsUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CategoryMetadataConnectionsUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryMetadataConnectionsUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}