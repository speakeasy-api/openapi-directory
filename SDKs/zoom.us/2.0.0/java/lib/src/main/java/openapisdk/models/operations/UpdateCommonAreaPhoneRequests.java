package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCommonAreaPhoneRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCommonAreaPhoneApplicationJson object;
    public UpdateCommonAreaPhoneRequests withObject(UpdateCommonAreaPhoneApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateCommonAreaPhoneMultipartFormData object1;
    public UpdateCommonAreaPhoneRequests withObject1(UpdateCommonAreaPhoneMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}