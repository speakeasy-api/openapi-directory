package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateChannelRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateChannelApplicationJson object;
    public CreateChannelRequests withObject(CreateChannelApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CreateChannelMultipartFormData1 object1;
    public CreateChannelRequests withObject1(CreateChannelMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}