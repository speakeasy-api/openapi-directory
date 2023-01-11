package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImGroupUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ImGroupUpdateApplicationJson object;
    public ImGroupUpdateRequests withObject(ImGroupUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ImGroupUpdateMultipartFormData object1;
    public ImGroupUpdateRequests withObject1(ImGroupUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}