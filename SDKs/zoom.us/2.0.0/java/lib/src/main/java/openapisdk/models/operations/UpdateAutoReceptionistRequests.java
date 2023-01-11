package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAutoReceptionistRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAutoReceptionistApplicationJson object;
    public UpdateAutoReceptionistRequests withObject(UpdateAutoReceptionistApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateAutoReceptionistMultipartFormData object1;
    public UpdateAutoReceptionistRequests withObject1(UpdateAutoReceptionistMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}