package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeFromChannelAlt1PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channel_id")
    public Double channelId;
    public UnsubscribeFromChannelAlt1PathParams withChannelId(Double channelId) {
        this.channelId = channelId;
        return this;
    }
}