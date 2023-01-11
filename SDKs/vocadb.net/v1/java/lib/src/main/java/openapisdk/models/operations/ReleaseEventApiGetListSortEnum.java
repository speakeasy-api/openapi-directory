package openapisdk.models.operations;


public enum ReleaseEventApiGetListSortEnum {
    NONE("None"),
    NAME("Name"),
    DATE("Date"),
    ADDITION_DATE("AdditionDate"),
    SERIES_NAME("SeriesName"),
    VENUE_NAME("VenueName");

    public final String value;

    private ReleaseEventApiGetListSortEnum(String value) {
        this.value = value;
    }
}
