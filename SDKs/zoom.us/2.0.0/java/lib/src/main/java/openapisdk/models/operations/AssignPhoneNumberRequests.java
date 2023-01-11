package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumberRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignPhoneNumberApplicationJson object;
    public AssignPhoneNumberRequests withObject(AssignPhoneNumberApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignPhoneNumberMultipartFormData1 object1;
    public AssignPhoneNumberRequests withObject1(AssignPhoneNumberMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}