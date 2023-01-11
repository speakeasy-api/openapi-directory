package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAChannelMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=channelId")
    public String channelId;
    public RemoveAChannelMemberPathParams withChannelId(String channelId) {
        this.channelId = channelId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public RemoveAChannelMemberPathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public RemoveAChannelMemberPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}