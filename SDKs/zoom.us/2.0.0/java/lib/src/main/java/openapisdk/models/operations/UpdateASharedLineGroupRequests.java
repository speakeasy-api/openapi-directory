package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateASharedLineGroupRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateASharedLineGroupApplicationJson object;
    public UpdateASharedLineGroupRequests withObject(UpdateASharedLineGroupApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateASharedLineGroupMultipartFormData object1;
    public UpdateASharedLineGroupRequests withObject1(UpdateASharedLineGroupMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}