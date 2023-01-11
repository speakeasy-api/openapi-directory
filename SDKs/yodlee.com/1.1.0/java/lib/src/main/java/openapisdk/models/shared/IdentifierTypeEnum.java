package openapisdk.models.shared;


public enum IdentifierTypeEnum {
    NIE("NIE"),
    DNI("DNI"),
    EIN("EIN"),
    BN("BN"),
    AADHAR("AADHAR"),
    NIN("NIN"),
    NRIC("NRIC");

    public final String value;

    private IdentifierTypeEnum(String value) {
        this.value = value;
    }
}
