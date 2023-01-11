package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveChannelModeratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public RemoveChannelModeratorsPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}