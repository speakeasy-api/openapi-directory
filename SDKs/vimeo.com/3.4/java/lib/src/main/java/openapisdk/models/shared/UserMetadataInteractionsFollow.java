package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class UserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public UserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public UserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}