package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignAllMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public UnassignAllMembersPathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}