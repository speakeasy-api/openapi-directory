package openapisdk.models.shared;


public enum SongForApiContractPvServicesEnum {
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

    private SongForApiContractPvServicesEnum(String value) {
        this.value = value;
    }
}
