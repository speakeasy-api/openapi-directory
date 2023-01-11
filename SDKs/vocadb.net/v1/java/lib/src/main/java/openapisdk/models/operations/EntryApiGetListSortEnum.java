package openapisdk.models.operations;


public enum EntryApiGetListSortEnum {
    NONE("None"),
    NAME("Name"),
    ADDITION_DATE("AdditionDate"),
    ACTIVITY_DATE("ActivityDate");

    public final String value;

    private EntryApiGetListSortEnum(String value) {
        this.value = value;
    }
}
