package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetUpAccountRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetUpAccountApplicationJson object;
    public SetUpAccountRequests withObject(SetUpAccountApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SetUpAccountMultipartFormData object1;
    public SetUpAccountRequests withObject1(SetUpAccountMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}