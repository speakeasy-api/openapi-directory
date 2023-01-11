package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddMembersToCallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public AddMembersToCallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
}