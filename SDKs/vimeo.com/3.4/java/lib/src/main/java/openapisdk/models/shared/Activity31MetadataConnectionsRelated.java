package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Activity31MetadataConnectionsRelated
 * Related content for this activity.
**/
public class Activity31MetadataConnectionsRelated {
    @JsonProperty("options")
    public String[] options;
    public Activity31MetadataConnectionsRelated withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Activity31MetadataConnectionsRelated withUri(String uri) {
        this.uri = uri;
        return this;
    }
}