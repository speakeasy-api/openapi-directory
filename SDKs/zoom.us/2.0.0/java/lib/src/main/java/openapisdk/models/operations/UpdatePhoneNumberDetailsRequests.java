package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePhoneNumberDetailsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePhoneNumberDetailsApplicationJson object;
    public UpdatePhoneNumberDetailsRequests withObject(UpdatePhoneNumberDetailsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdatePhoneNumberDetailsMultipartFormData object1;
    public UpdatePhoneNumberDetailsRequests withObject1(UpdatePhoneNumberDetailsMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}