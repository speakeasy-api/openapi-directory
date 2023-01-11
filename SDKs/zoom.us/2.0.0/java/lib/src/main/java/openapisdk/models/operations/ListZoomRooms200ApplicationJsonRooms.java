package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListZoomRooms200ApplicationJsonRooms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activation_code")
    public String activationCode;
    public ListZoomRooms200ApplicationJsonRooms withActivationCode(String activationCode) {
        this.activationCode = activationCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListZoomRooms200ApplicationJsonRooms withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public ListZoomRooms200ApplicationJsonRooms withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListZoomRooms200ApplicationJsonRooms withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_id")
    public String roomId;
    public ListZoomRooms200ApplicationJsonRooms withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ListZoomRooms200ApplicationJsonRoomsStatusEnum status;
    public ListZoomRooms200ApplicationJsonRooms withStatus(ListZoomRooms200ApplicationJsonRoomsStatusEnum status) {
        this.status = status;
        return this;
    }
}