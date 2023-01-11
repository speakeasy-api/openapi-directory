package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateASharedLineGroupRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateASharedLineGroupApplicationJson object;
    public CreateASharedLineGroupRequests withObject(CreateASharedLineGroupApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateASharedLineGroupMultipartFormData object1;
    public CreateASharedLineGroupRequests withObject1(CreateASharedLineGroupMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}