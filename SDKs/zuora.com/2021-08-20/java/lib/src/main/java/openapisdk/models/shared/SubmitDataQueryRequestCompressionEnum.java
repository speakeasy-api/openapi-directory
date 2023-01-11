package openapisdk.models.shared;


public enum SubmitDataQueryRequestCompressionEnum {
    NONE("NONE"),
    GZIP("GZIP"),
    ZIP("ZIP");

    public final String value;

    private SubmitDataQueryRequestCompressionEnum(String value) {
        this.value = value;
    }
}
