package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipPhoneRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateSipPhoneApplicationJson object;
    public UpdateSipPhoneRequests withObject(UpdateSipPhoneApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateSipPhoneMultipartFormData object1;
    public UpdateSipPhoneRequests withObject1(UpdateSipPhoneMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}