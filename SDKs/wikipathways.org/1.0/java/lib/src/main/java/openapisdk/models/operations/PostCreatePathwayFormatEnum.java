package openapisdk.models.operations;


public enum PostCreatePathwayFormatEnum {
    JSON("json"),
    XML("xml"),
    HTML("html"),
    DUMP("dump"),
    JPG("jpg"),
    PDF("pdf");

    public final String value;

    private PostCreatePathwayFormatEnum(String value) {
        this.value = value;
    }
}
