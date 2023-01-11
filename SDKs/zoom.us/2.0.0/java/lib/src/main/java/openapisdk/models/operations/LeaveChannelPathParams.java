package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LeaveChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public LeaveChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}