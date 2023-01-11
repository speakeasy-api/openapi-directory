package openapisdk.models.operations;


public enum AlbumApiGetListDiscTypesEnum {
    UNKNOWN("Unknown"),
    ALBUM("Album"),
    SINGLE("Single"),
    EP("EP"),
    SPLIT_ALBUM("SplitAlbum"),
    COMPILATION("Compilation"),
    VIDEO("Video"),
    ARTBOOK("Artbook"),
    GAME("Game"),
    FANMADE("Fanmade"),
    INSTRUMENTAL("Instrumental"),
    OTHER("Other");

    public final String value;

    private AlbumApiGetListDiscTypesEnum(String value) {
        this.value = value;
    }
}
