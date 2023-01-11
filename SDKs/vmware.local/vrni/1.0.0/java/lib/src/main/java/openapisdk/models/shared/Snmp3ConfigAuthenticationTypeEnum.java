package openapisdk.models.shared;


public enum Snmp3ConfigAuthenticationTypeEnum {
    NO_AUTH("NO_AUTH"),
    MD5("MD5"),
    SHA("SHA");

    public final String value;

    private Snmp3ConfigAuthenticationTypeEnum(String value) {
        this.value = value;
    }
}
