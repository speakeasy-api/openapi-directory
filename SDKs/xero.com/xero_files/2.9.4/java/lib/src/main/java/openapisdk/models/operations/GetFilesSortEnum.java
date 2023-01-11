package openapisdk.models.operations;


public enum GetFilesSortEnum {
    NAME("Name"),
    SIZE("Size"),
    CREATED_DATE_UTC("CreatedDateUTC");

    public final String value;

    private GetFilesSortEnum(String value) {
        this.value = value;
    }
}
