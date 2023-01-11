package openapisdk.models.operations;


public enum SongApiGetTopSongsFilterByEnum {
    CREATE_DATE("CreateDate"),
    PUBLISH_DATE("PublishDate"),
    POPULARITY("Popularity");

    public final String value;

    private SongApiGetTopSongsFilterByEnum(String value) {
        this.value = value;
    }
}
