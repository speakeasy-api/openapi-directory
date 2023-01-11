package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class PresetsUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public PresetsUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}