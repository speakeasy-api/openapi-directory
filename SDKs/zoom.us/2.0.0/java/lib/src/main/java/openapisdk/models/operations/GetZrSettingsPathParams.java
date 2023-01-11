package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public GetZrSettingsPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}