package openapisdk.models.operations;


public enum UserApiGetAlbumCollectionSortEnum {
    NONE("None"),
    NAME("Name"),
    RELEASE_DATE("ReleaseDate"),
    RELEASE_DATE_WITH_NULLS("ReleaseDateWithNulls"),
    ADDITION_DATE("AdditionDate"),
    RATING_AVERAGE("RatingAverage"),
    RATING_TOTAL("RatingTotal"),
    NAME_THEN_RELEASE_DATE("NameThenReleaseDate"),
    COLLECTION_COUNT("CollectionCount");

    public final String value;

    private UserApiGetAlbumCollectionSortEnum(String value) {
        this.value = value;
    }
}
