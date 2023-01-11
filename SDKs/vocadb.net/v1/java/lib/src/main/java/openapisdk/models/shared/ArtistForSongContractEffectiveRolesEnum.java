package openapisdk.models.shared;


public enum ArtistForSongContractEffectiveRolesEnum {
    DEFAULT_("Default"),
    ANIMATOR("Animator"),
    ARRANGER("Arranger"),
    COMPOSER("Composer"),
    DISTRIBUTOR("Distributor"),
    ILLUSTRATOR("Illustrator"),
    INSTRUMENTALIST("Instrumentalist"),
    LYRICIST("Lyricist"),
    MASTERING("Mastering"),
    PUBLISHER("Publisher"),
    VOCALIST("Vocalist"),
    VOICE_MANIPULATOR("VoiceManipulator"),
    OTHER("Other"),
    MIXER("Mixer"),
    CHORUS("Chorus"),
    ENCODER("Encoder"),
    VOCAL_DATA_PROVIDER("VocalDataProvider");

    public final String value;

    private ArtistForSongContractEffectiveRolesEnum(String value) {
        this.value = value;
    }
}
