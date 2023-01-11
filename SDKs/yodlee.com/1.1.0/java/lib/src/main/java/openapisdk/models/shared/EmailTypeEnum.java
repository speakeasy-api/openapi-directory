package openapisdk.models.shared;


public enum EmailTypeEnum {
    PRIMARY("PRIMARY"),
    SECONDARY("SECONDARY"),
    PERSONAL("PERSONAL"),
    WORK("WORK"),
    OTHERS("OTHERS");

    public final String value;

    private EmailTypeEnum(String value) {
        this.value = value;
    }
}
