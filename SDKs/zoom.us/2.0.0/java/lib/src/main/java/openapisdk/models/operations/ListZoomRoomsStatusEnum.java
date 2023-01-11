package openapisdk.models.operations;


public enum ListZoomRoomsStatusEnum {
    OFFLINE("Offline"),
    AVAILABLE("Available"),
    IN_MEETING("InMeeting"),
    UNDER_CONSTRUCTION("UnderConstruction");

    public final String value;

    private ListZoomRoomsStatusEnum(String value) {
        this.value = value;
    }
}
