package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsAppearances
 * Information about the appearances of this user in other videos.
**/
public class UserMetadataConnectionsAppearances {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsAppearances withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsAppearances withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsAppearances withUri(String uri) {
        this.uri = uri;
        return this;
    }
}