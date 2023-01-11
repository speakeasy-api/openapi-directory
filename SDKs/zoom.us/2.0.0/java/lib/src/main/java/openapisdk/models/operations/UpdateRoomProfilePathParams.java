package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRoomProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public UpdateRoomProfilePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}