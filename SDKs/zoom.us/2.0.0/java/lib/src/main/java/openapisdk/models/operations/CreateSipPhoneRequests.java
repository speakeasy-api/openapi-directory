package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipPhoneRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSipPhoneApplicationJson object;
    public CreateSipPhoneRequests withObject(CreateSipPhoneApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateSipPhoneMultipartFormData object1;
    public CreateSipPhoneRequests withObject1(CreateSipPhoneMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}