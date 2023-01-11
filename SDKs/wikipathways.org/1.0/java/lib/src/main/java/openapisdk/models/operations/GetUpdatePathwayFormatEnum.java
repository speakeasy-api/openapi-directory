package openapisdk.models.operations;


public enum GetUpdatePathwayFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetUpdatePathwayFormatEnum(String value) {
        this.value = value;
    }
}
