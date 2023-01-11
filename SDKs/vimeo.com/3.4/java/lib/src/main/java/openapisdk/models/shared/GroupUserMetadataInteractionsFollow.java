package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class GroupUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public GroupUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}