package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneToCallQueueRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignPhoneToCallQueueApplicationJson object;
    public AssignPhoneToCallQueueRequests withObject(AssignPhoneToCallQueueApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignPhoneToCallQueueMultipartFormData1 object1;
    public AssignPhoneToCallQueueRequests withObject1(AssignPhoneToCallQueueMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}