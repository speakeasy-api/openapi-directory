package openapisdk.models.operations;


public enum GetFindInteractionsFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetFindInteractionsFormatEnum(String value) {
        this.value = value;
    }
}
