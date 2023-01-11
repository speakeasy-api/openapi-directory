package openapisdk.models.operations;


public enum UserApiGetAlbumCollectionAlbumTypesEnum {
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

    private UserApiGetAlbumCollectionAlbumTypesEnum(String value) {
        this.value = value;
    }
}
