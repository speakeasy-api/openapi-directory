package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveChannelModeratorPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public RemoveChannelModeratorPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public RemoveChannelModeratorPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}