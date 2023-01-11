package openapisdk.models.operations;


public enum SongApiGetListPvServicesEnum {
    NOTHING("Nothing"),
    NICO_NICO_DOUGA("NicoNicoDouga"),
    YOUTUBE("Youtube"),
    SOUND_CLOUD("SoundCloud"),
    VIMEO("Vimeo"),
    PIAPRO("Piapro"),
    BILIBILI("Bilibili"),
    FILE("File"),
    LOCAL_FILE("LocalFile"),
    CREOFUGA("Creofuga"),
    BANDCAMP("Bandcamp");

    public final String value;

    private SongApiGetListPvServicesEnum(String value) {
        this.value = value;
    }
}
