package openapisdk.models.operations;


public enum GetGetXrefListFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetGetXrefListFormatEnum(String value) {
        this.value = value;
    }
}
