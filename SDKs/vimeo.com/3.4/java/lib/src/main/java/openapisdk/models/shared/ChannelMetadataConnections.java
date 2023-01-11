package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataConnections
 * A collection of information that is connected to this resource.
**/
public class ChannelMetadataConnections {
    @JsonProperty("privacy_users")
    public ChannelMetadataConnectionsPrivacyUsers privacyUsers;
    public ChannelMetadataConnections withPrivacyUsers(ChannelMetadataConnectionsPrivacyUsers privacyUsers) {
        this.privacyUsers = privacyUsers;
        return this;
    }
    @JsonProperty("users")
    public ChannelMetadataConnectionsUsers users;
    public ChannelMetadataConnections withUsers(ChannelMetadataConnectionsUsers users) {
        this.users = users;
        return this;
    }
    @JsonProperty("videos")
    public ChannelMetadataConnectionsVideos videos;
    public ChannelMetadataConnections withVideos(ChannelMetadataConnectionsVideos videos) {
        this.videos = videos;
        return this;
    }
}