package openapisdk.models.operations;


public enum GetLoginFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetLoginFormatEnum(String value) {
        this.value = value;
    }
}
