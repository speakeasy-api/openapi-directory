package openapisdk.models.operations;


public enum GetGetCurationTagsFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetGetCurationTagsFormatEnum(String value) {
        this.value = value;
    }
}
