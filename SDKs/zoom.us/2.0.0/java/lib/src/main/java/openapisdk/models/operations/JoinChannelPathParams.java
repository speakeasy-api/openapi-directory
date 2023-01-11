package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JoinChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public JoinChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}