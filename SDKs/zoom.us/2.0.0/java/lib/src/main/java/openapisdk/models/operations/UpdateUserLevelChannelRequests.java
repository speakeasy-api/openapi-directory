package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserLevelChannelRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateUserLevelChannelApplicationJson object;
    public UpdateUserLevelChannelRequests withObject(UpdateUserLevelChannelApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateUserLevelChannelMultipartFormData object1;
    public UpdateUserLevelChannelRequests withObject1(UpdateUserLevelChannelMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}