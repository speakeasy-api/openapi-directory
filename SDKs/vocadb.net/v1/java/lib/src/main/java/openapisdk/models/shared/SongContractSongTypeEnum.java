package openapisdk.models.shared;


public enum SongContractSongTypeEnum {
    UNSPECIFIED("Unspecified"),
    ORIGINAL("Original"),
    REMASTER("Remaster"),
    REMIX("Remix"),
    COVER("Cover"),
    ARRANGEMENT("Arrangement"),
    INSTRUMENTAL("Instrumental"),
    MASHUP("Mashup"),
    MUSIC_PV("MusicPV"),
    DRAMA_PV("DramaPV"),
    LIVE("Live"),
    ILLUSTRATION("Illustration"),
    OTHER("Other");

    public final String value;

    private SongContractSongTypeEnum(String value) {
        this.value = value;
    }
}
