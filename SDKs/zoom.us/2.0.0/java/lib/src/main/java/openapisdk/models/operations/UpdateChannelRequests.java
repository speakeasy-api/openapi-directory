package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateChannelApplicationJson object;
    public UpdateChannelRequests withObject(UpdateChannelApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateChannelMultipartFormData object1;
    public UpdateChannelRequests withObject1(UpdateChannelMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}