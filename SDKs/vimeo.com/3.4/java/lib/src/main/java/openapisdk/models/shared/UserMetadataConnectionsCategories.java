package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsCategories
 * Information about this user's followed categories.
**/
public class UserMetadataConnectionsCategories {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsCategories withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsCategories withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsCategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}