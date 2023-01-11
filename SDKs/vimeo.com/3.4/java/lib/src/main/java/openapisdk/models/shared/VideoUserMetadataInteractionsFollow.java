package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserMetadataInteractionsFollow
 * Information related to the followed status of this user.
**/
public class VideoUserMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public VideoUserMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public VideoUserMetadataInteractionsFollow withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoUserMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}