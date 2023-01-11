package openapisdk.models.operations;


public enum GetListOrganismsFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetListOrganismsFormatEnum(String value) {
        this.value = value;
    }
}
