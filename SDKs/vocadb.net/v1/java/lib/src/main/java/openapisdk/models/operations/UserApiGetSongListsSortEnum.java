package openapisdk.models.operations;


public enum UserApiGetSongListsSortEnum {
    NONE("None"),
    NAME("Name"),
    DATE("Date"),
    CREATE_DATE("CreateDate");

    public final String value;

    private UserApiGetSongListsSortEnum(String value) {
        this.value = value;
    }
}
