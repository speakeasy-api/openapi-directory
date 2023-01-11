package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeCallQueueManagerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public ChangeCallQueueManagerPathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}