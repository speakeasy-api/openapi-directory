package openapisdk.models.shared;


public enum SettingValueResponseWrapperMethodEnum {
    GET("GET"),
    HEAD("HEAD"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    OPTIONS("OPTIONS"),
    TRACE("TRACE");

    public final String value;

    private SettingValueResponseWrapperMethodEnum(String value) {
        this.value = value;
    }
}
