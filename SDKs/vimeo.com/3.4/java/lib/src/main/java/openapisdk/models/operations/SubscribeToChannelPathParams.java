package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public SubscribeToChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=user_id")
    public Double userId;
    public SubscribeToChannelPathParams withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}