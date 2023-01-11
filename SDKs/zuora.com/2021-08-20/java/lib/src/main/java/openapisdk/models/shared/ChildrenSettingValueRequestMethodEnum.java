package openapisdk.models.shared;


public enum ChildrenSettingValueRequestMethodEnum {
    GET("GET"),
    HEAD("HEAD"),
    POST("POST"),
    PUT("PUT"),
    PATCH("PATCH"),
    DELETE("DELETE"),
    OPTIONS("OPTIONS"),
    TRACE("TRACE");

    public final String value;

    private ChildrenSettingValueRequestMethodEnum(String value) {
        this.value = value;
    }
}
