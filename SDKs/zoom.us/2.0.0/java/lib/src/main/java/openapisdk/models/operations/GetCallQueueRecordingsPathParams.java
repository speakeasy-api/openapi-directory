package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCallQueueRecordingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public GetCallQueueRecordingsPathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}