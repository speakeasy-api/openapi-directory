package openapisdk.models.operations;


public enum AlbumApiGetListArtistParticipationStatusEnum {
    EVERYTHING("Everything"),
    ONLY_MAIN_ALBUMS("OnlyMainAlbums"),
    ONLY_COLLABORATIONS("OnlyCollaborations");

    public final String value;

    private AlbumApiGetListArtistParticipationStatusEnum(String value) {
        this.value = value;
    }
}
