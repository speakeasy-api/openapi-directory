package openapisdk.models.shared;


public enum SongForApiContractSongTypeEnum {
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

    private SongForApiContractSongTypeEnum(String value) {
        this.value = value;
    }
}
