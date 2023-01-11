package openapisdk.models.operations;


public enum SongApiGetByPvPvServiceEnum {
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

    private SongApiGetByPvPvServiceEnum(String value) {
        this.value = value;
    }
}
