package openapisdk.models.operations;


public enum SongApiGetListArtistParticipationStatusEnum {
    EVERYTHING("Everything"),
    ONLY_MAIN_ALBUMS("OnlyMainAlbums"),
    ONLY_COLLABORATIONS("OnlyCollaborations");

    public final String value;

    private SongApiGetListArtistParticipationStatusEnum(String value) {
        this.value = value;
    }
}
