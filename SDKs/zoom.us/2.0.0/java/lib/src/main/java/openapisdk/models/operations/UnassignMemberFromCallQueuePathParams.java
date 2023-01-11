package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignMemberFromCallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public UnassignMemberFromCallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=memberId")
    public String memberId;
    public UnassignMemberFromCallQueuePathParams withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}