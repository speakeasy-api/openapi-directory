package openapisdk.models.operations;


public enum GetGetCurationTagHistoryFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetGetCurationTagHistoryFormatEnum(String value) {
        this.value = value;
    }
}
