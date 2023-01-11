package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendimmessagesRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SendimmessagesApplicationJson object;
    public SendimmessagesRequests withObject(SendimmessagesApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public SendimmessagesMultipartFormData object1;
    public SendimmessagesRequests withObject1(SendimmessagesMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}