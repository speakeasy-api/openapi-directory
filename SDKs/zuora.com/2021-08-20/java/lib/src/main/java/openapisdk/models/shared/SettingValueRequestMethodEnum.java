package openapisdk.models.shared;


public enum SettingValueRequestMethodEnum {
    GET("GET"),
    HEAD("HEAD"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    OPTIONS("OPTIONS"),
    TRACE("TRACE");

    public final String value;

    private SettingValueRequestMethodEnum(String value) {
        this.value = value;
    }
}
