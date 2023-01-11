package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnassignAPhoneNumCallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public UnassignAPhoneNumCallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}