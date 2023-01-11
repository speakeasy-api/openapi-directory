package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChannelMetadataInteractions
 * A list of resource URIs related to the channel.
**/
public class ChannelMetadataInteractions {
    @JsonProperty("add_moderators")
    public ChannelMetadataInteractionsAddModerators addModerators;
    public ChannelMetadataInteractions withAddModerators(ChannelMetadataInteractionsAddModerators addModerators) {
        this.addModerators = addModerators;
        return this;
    }
    @JsonProperty("add_to")
    public ChannelMetadataInteractionsAddTo addTo;
    public ChannelMetadataInteractions withAddTo(ChannelMetadataInteractionsAddTo addTo) {
        this.addTo = addTo;
        return this;
    }
    @JsonProperty("follow")
    public ChannelMetadataInteractionsFollow follow;
    public ChannelMetadataInteractions withFollow(ChannelMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
    @JsonProperty("moderate_videos")
    public ChannelMetadataInteractionsModerateVideos moderateVideos;
    public ChannelMetadataInteractions withModerateVideos(ChannelMetadataInteractionsModerateVideos moderateVideos) {
        this.moderateVideos = moderateVideos;
        return this;
    }
}