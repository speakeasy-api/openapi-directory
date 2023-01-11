package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddBatchWebinarRegistrantsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddBatchWebinarRegistrantsApplicationJson object;
    public AddBatchWebinarRegistrantsRequests withObject(AddBatchWebinarRegistrantsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public AddBatchWebinarRegistrantsMultipartFormData1 object1;
    public AddBatchWebinarRegistrantsRequests withObject1(AddBatchWebinarRegistrantsMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}