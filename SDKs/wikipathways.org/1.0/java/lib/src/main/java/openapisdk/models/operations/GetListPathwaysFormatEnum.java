package openapisdk.models.operations;


public enum GetListPathwaysFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetListPathwaysFormatEnum(String value) {
        this.value = value;
    }
}
