package openapisdk.models.shared;


public enum SettingItemHttpOperationMethodEnum {
    GET("GET"),
    HEAD("HEAD"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    OPTIONS("OPTIONS"),
    TRACE("TRACE");

    public final String value;

    private SettingItemHttpOperationMethodEnum(String value) {
        this.value = value;
    }
}
