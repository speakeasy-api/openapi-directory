package openapisdk.models.shared;


public enum SubmitDataQueryRequestOutputFormatEnum {
    JSON("JSON"),
    CSV("CSV"),
    TSV("TSV"),
    DSV("DSV");

    public final String value;

    private SubmitDataQueryRequestOutputFormatEnum(String value) {
        this.value = value;
    }
}
