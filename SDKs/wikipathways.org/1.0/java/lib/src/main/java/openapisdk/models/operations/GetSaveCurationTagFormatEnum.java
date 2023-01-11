package openapisdk.models.operations;


public enum GetSaveCurationTagFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetSaveCurationTagFormatEnum(String value) {
        this.value = value;
    }
}
