package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadataConnections
 * A collection of information that is connected to this resource.
**/
public class GroupMetadataConnections {
    @JsonProperty("users")
    public GroupMetadataConnectionsUsers users;
    public GroupMetadataConnections withUsers(GroupMetadataConnectionsUsers users) {
        this.users = users;
        return this;
    }
    @JsonProperty("videos")
    public GroupMetadataConnectionsVideos videos;
    public GroupMetadataConnections withVideos(GroupMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}