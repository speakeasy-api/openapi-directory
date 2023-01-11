package openapisdk.models.operations;


public enum ListZoomRoomsTypeEnum {
    ZOOM_ROOM("ZoomRoom"),
    SCHEDULING_DISPLAY_ONLY("SchedulingDisplayOnly"),
    DIGITAL_SIGNAGE_ONLY("DigitalSignageOnly");

    public final String value;

    private ListZoomRoomsTypeEnum(String value) {
        this.value = value;
    }
}
