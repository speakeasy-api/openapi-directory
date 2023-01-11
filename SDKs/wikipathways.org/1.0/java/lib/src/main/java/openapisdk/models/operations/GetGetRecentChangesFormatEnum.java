package openapisdk.models.operations;


public enum GetGetRecentChangesFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetGetRecentChangesFormatEnum(String value) {
        this.value = value;
    }
}
