package openapisdk.models.operations;


public enum GetFoldersSortEnum {
    NAME("Name"),
    SIZE("Size"),
    CREATED_DATE_UTC("CreatedDateUTC");

    public final String value;

    private GetFoldersSortEnum(String value) {
        this.value = value;
    }
}
