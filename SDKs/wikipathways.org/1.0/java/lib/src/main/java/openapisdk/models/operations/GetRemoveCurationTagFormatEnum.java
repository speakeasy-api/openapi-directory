package openapisdk.models.operations;


public enum GetRemoveCurationTagFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetRemoveCurationTagFormatEnum(String value) {
        this.value = value;
    }
}
