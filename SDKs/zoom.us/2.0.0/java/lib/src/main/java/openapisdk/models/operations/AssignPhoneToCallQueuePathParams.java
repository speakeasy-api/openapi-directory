package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneToCallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public AssignPhoneToCallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}