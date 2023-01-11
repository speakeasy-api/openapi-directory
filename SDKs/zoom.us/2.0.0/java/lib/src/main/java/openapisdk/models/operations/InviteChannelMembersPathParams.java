package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteChannelMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public InviteChannelMembersPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public InviteChannelMembersPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}