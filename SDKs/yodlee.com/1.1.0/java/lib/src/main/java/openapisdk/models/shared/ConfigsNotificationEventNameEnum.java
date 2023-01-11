package openapisdk.models.shared;


public enum ConfigsNotificationEventNameEnum {
    REFRESH("REFRESH"),
    DATA_UPDATES("DATA_UPDATES"),
    AUTO_REFRESH_UPDATES("AUTO_REFRESH_UPDATES");

    public final String value;

    private ConfigsNotificationEventNameEnum(String value) {
        this.value = value;
    }
}
