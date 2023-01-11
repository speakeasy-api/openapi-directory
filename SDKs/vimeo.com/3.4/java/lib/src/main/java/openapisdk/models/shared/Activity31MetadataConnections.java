package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Activity31MetadataConnections
 * A list of resource URIs related to the activity.
**/
public class Activity31MetadataConnections {
    @JsonProperty("related")
    public Activity31MetadataConnectionsRelated related;
    public Activity31MetadataConnections withRelated(Activity31MetadataConnectionsRelated related) {
        this.related = related;
        return this;
    }
}