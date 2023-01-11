package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationProfileRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateZrLocationProfileApplicationJson object;
    public UpdateZrLocationProfileRequests withObject(UpdateZrLocationProfileApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateZrLocationProfileMultipartFormData object1;
    public UpdateZrLocationProfileRequests withObject1(UpdateZrLocationProfileMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}