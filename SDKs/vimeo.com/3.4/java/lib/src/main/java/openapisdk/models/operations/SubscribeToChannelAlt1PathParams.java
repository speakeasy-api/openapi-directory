package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SubscribeToChannelAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public SubscribeToChannelAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}