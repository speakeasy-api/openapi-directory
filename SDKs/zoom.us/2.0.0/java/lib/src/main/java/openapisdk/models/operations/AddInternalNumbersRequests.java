package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddInternalNumbersRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddInternalNumbersApplicationJson object;
    public AddInternalNumbersRequests withObject(AddInternalNumbersApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddInternalNumbersMultipartFormData1 object1;
    public AddInternalNumbersRequests withObject1(AddInternalNumbersMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}