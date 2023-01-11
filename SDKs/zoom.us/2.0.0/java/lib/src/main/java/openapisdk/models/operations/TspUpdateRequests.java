package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TspUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TspUpdateApplicationJson object;
    public TspUpdateRequests withObject(TspUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public TspUpdateMultipartFormData object1;
    public TspUpdateRequests withObject1(TspUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}