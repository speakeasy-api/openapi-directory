package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckInRoomsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CheckInRoomsApplicationJson object;
    public CheckInRoomsRequests withObject(CheckInRoomsApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public CheckInRoomsMultipartFormData object1;
    public CheckInRoomsRequests withObject1(CheckInRoomsMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}