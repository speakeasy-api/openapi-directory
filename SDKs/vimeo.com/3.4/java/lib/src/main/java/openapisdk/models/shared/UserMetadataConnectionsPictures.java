package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsPictures
 * Information about this user's portraits.
**/
public class UserMetadataConnectionsPictures {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsPictures withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsPictures withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsPictures withUri(String uri) {
        this.uri = uri;
        return this;
    }
}