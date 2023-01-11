package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersAutoReceptionistRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignPhoneNumbersAutoReceptionistApplicationJson object;
    public AssignPhoneNumbersAutoReceptionistRequests withObject(AssignPhoneNumbersAutoReceptionistApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignPhoneNumbersAutoReceptionistMultipartFormData1 object1;
    public AssignPhoneNumbersAutoReceptionistRequests withObject1(AssignPhoneNumbersAutoReceptionistMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}