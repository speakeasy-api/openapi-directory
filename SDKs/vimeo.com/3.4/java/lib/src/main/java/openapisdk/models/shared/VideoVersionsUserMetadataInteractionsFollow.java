package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class VideoVersionsUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public VideoVersionsUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoVersionsUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoVersionsUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}