package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public GetZrProfilePathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}