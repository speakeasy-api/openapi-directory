package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomProfileRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateRoomProfileApplicationJson object;
    public UpdateRoomProfileRequests withObject(UpdateRoomProfileApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateRoomProfileMultipartFormData object1;
    public UpdateRoomProfileRequests withObject1(UpdateRoomProfileMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}