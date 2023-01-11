package openapisdk.models.operations;


public enum ListZoomRooms200ApplicationJsonRoomsStatusEnum {
    OFFLINE("Offline"),
    AVAILABLE("Available"),
    IN_MEETING("InMeeting"),
    UNDER_CONSTRUCTION("UnderConstruction");

    public final String value;

    private ListZoomRooms200ApplicationJsonRoomsStatusEnum(String value) {
        this.value = value;
    }
}
