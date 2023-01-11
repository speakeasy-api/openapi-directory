package openapisdk.models.shared;


public enum CobrandNotificationEventNameEnum {
    REFRESH("REFRESH"),
    DATA_UPDATES("DATA_UPDATES"),
    AUTO_REFRESH_UPDATES("AUTO_REFRESH_UPDATES");

    public final String value;

    private CobrandNotificationEventNameEnum(String value) {
        this.value = value;
    }
}
