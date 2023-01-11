package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZoomRoomsLocationStructureRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateZoomRoomsLocationStructureApplicationJson object;
    public UpdateZoomRoomsLocationStructureRequests withObject(UpdateZoomRoomsLocationStructureApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UpdateZoomRoomsLocationStructureMultipartFormData object1;
    public UpdateZoomRoomsLocationStructureRequests withObject1(UpdateZoomRoomsLocationStructureMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}