package openapisdk.models.operations;


public enum GetGetPathwayAsFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetGetPathwayAsFormatEnum(String value) {
        this.value = value;
    }
}
