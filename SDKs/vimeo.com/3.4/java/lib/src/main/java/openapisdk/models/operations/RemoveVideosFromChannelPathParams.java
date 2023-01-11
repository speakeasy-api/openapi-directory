package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveVideosFromChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public RemoveVideosFromChannelPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}