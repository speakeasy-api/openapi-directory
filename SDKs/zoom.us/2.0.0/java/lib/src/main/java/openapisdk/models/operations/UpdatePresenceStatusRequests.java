package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePresenceStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePresenceStatusApplicationJson object;
    public UpdatePresenceStatusRequests withObject(UpdatePresenceStatusApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdatePresenceStatusMultipartFormData object1;
    public UpdatePresenceStatusRequests withObject1(UpdatePresenceStatusMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}