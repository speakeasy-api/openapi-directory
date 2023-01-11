package openapisdk.models.shared;


public enum CiscoSwitchTypeEnum {
    CATALYST3000("CATALYST_3000"),
    CATALYST4500("CATALYST_4500"),
    CATALYST6500("CATALYST_6500"),
    NEXUS5_K("NEXUS_5K"),
    NEXUS7_K("NEXUS_7K"),
    NEXUS9_K("NEXUS_9K");

    public final String value;

    private CiscoSwitchTypeEnum(String value) {
        this.value = value;
    }
}
