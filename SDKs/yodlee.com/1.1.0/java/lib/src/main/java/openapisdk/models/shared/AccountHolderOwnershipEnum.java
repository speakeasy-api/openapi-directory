package openapisdk.models.shared;


public enum AccountHolderOwnershipEnum {
    PRIMARY("PRIMARY"),
    SECONDARY("SECONDARY"),
    CUSTODIAN("CUSTODIAN"),
    OTHERS("OTHERS"),
    POWER_OF_ATTORNEY("POWER_OF_ATTORNEY"),
    TRUSTEE("TRUSTEE"),
    JOINT_OWNER("JOINT_OWNER"),
    BENEFICIARY("BENEFICIARY"),
    AAS("AAS"),
    BUSINESS("BUSINESS"),
    DBA("DBA"),
    TRUST("TRUST");

    public final String value;

    private AccountHolderOwnershipEnum(String value) {
        this.value = value;
    }
}
