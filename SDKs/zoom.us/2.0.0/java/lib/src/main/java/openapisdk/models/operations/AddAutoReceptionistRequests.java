package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAutoReceptionistRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddAutoReceptionistApplicationJson object;
    public AddAutoReceptionistRequests withObject(AddAutoReceptionistApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddAutoReceptionistMultipartFormData object1;
    public AddAutoReceptionistRequests withObject1(AddAutoReceptionistMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}