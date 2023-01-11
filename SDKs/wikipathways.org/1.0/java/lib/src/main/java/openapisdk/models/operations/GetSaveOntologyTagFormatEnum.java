package openapisdk.models.operations;


public enum GetSaveOntologyTagFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private GetSaveOntologyTagFormatEnum(String value) {
        this.value = value;
    }
}
