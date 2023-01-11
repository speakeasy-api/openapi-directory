package openapisdk.models.shared;


public enum ArtistForEventContractRolesEnum {
    DEFAULT_("Default"),
    DANCER("Dancer"),
    DJ("DJ"),
    INSTRUMENTALIST("Instrumentalist"),
    ORGANIZER("Organizer"),
    PROMOTER("Promoter"),
    VJ("VJ"),
    VOCALIST("Vocalist"),
    VOICE_MANIPULATOR("VoiceManipulator"),
    OTHER_PERFORMER("OtherPerformer"),
    OTHER("Other");

    public final String value;

    private ArtistForEventContractRolesEnum(String value) {
        this.value = value;
    }
}
