package openapisdk.models.shared;


public enum AlbumForApiContractDiscTypeEnum {
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

    private AlbumForApiContractDiscTypeEnum(String value) {
        this.value = value;
    }
}
