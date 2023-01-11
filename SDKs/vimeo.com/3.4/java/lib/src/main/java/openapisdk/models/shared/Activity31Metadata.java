package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Activity31Metadata
 * The activity's metadata.
**/
public class Activity31Metadata {
    @JsonProperty("connections")
    public Activity31MetadataConnections connections;
    public Activity31Metadata withConnections(Activity31MetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}