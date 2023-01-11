package openapisdk.models.shared;


public enum Snmp3ConfigPrivacyTypeEnum {
    AES("AES"),
    DES("DES"),
    AES128("AES128"),
    AES192("AES192"),
    AES256("AES256"),
    THREE_DES("3DES"),
    NO_PRIV("NO_PRIV");

    public final String value;

    private Snmp3ConfigPrivacyTypeEnum(String value) {
        this.value = value;
    }
}
