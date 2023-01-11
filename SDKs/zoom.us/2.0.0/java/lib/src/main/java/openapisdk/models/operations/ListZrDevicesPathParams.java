package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListZrDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=roomId")
    public String roomId;
    public ListZrDevicesPathParams withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
}