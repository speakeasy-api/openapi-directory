package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataInteractionsBlock
 * Information related to the block status of this user.
**/
public class PresetsUserMetadataInteractionsBlock {
    @JsonProperty("added")
    public Boolean added;
    public PresetsUserMetadataInteractionsBlock withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public PresetsUserMetadataInteractionsBlock withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataInteractionsBlock withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataInteractionsBlock withUri(String uri) {
        this.uri = uri;
        return this;
    }
}