package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceChannelModeratorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public ReplaceChannelModeratorsPathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}