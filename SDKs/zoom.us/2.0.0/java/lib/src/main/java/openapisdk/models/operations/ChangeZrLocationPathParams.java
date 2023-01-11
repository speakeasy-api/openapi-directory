package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZrLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public ChangeZrLocationPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}