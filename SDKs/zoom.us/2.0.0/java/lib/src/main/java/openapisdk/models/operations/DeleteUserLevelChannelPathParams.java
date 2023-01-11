package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserLevelChannelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public DeleteUserLevelChannelPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
}