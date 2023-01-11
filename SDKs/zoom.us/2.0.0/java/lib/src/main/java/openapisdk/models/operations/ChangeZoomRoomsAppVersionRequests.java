package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZoomRoomsAppVersionRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ChangeZoomRoomsAppVersionApplicationJson object;
    public ChangeZoomRoomsAppVersionRequests withObject(ChangeZoomRoomsAppVersionApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public ChangeZoomRoomsAppVersionMultipartFormData object1;
    public ChangeZoomRoomsAppVersionRequests withObject1(ChangeZoomRoomsAppVersionMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}