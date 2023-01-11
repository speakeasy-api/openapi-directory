package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAZoomRoomPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public DeleteAZoomRoomPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}