package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssignPhoneNumbersSlgRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssignPhoneNumbersSlgApplicationJson object;
    public AssignPhoneNumbersSlgRequests withObject(AssignPhoneNumbersSlgApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AssignPhoneNumbersSlgMultipartFormData1 object1;
    public AssignPhoneNumbersSlgRequests withObject1(AssignPhoneNumbersSlgMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}