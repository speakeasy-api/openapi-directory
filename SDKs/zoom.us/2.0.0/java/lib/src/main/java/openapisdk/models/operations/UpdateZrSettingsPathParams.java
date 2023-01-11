package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public UpdateZrSettingsPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}