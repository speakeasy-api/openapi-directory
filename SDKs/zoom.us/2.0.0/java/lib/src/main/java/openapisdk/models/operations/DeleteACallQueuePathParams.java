package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteACallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public DeleteACallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}