package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrAccProfileRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateZrAccProfileApplicationJson object;
    public UpdateZrAccProfileRequests withObject(UpdateZrAccProfileApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateZrAccProfileMultipartFormData object1;
    public UpdateZrAccProfileRequests withObject1(UpdateZrAccProfileMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}