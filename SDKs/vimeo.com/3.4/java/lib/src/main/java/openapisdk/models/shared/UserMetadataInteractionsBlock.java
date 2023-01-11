package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class UserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public UserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public UserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public UserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}