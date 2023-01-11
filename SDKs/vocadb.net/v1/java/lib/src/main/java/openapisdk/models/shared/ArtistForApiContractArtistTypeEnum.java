package openapisdk.models.shared;


public enum ArtistForApiContractArtistTypeEnum {
    UNKNOWN("Unknown"),
    CIRCLE("Circle"),
    LABEL("Label"),
    PRODUCER("Producer"),
    ANIMATOR("Animator"),
    ILLUSTRATOR("Illustrator"),
    LYRICIST("Lyricist"),
    VOCALOID("Vocaloid"),
    UTAU("UTAU"),
    CE_VIO("CeVIO"),
    OTHER_VOICE_SYNTHESIZER("OtherVoiceSynthesizer"),
    OTHER_VOCALIST("OtherVocalist"),
    OTHER_GROUP("OtherGroup"),
    OTHER_INDIVIDUAL("OtherIndividual"),
    UTAITE("Utaite"),
    BAND("Band"),
    VOCALIST("Vocalist"),
    CHARACTER("Character"),
    SYNTHESIZER_V("SynthesizerV");

    public final String value;

    private ArtistForApiContractArtistTypeEnum(String value) {
        this.value = value;
    }
}
