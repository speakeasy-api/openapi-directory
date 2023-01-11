package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPhoneDeviceRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddPhoneDeviceApplicationJson object;
    public AddPhoneDeviceRequests withObject(AddPhoneDeviceApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddPhoneDeviceMultipartFormData object1;
    public AddPhoneDeviceRequests withObject1(AddPhoneDeviceMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}