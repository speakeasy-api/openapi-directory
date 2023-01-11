package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnAssignPhoneNumCallQueuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=callQueueId")
    public String callQueueId;
    public UnAssignPhoneNumCallQueuePathParams withCallQueueId(String callQueueId) {
        this.callQueueId = callQueueId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=phoneNumberId")
    public String phoneNumberId;
    public UnAssignPhoneNumCallQueuePathParams withPhoneNumberId(String phoneNumberId) {
        this.phoneNumberId = phoneNumberId;
        return this;
    }
}