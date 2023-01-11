package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataConnections
 * A collection of information that is connected to this resource.
**/
public class CategoryMetadataConnections {
    @JsonProperty("channels")
    public CategoryMetadataConnectionsChannels channels;
    public CategoryMetadataConnections withChannels(CategoryMetadataConnectionsChannels channels) {
        this.channels = channels;
        return this;
    }
    @JsonProperty("groups")
    public CategoryMetadataConnectionsGroups groups;
    public CategoryMetadataConnections withGroups(CategoryMetadataConnectionsGroups groups) {
        this.groups = groups;
        return this;
    }
    @JsonProperty("users")
    public CategoryMetadataConnectionsUsers users;
    public CategoryMetadataConnections withUsers(CategoryMetadataConnectionsUsers users) {
        this.users = users;
        return this;
    }
    @JsonProperty("videos")
    public CategoryMetadataConnectionsVideos videos;
    public CategoryMetadataConnections withVideos(CategoryMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}