package openapisdk.models.shared;


public enum RewardBalanceBalanceTypeEnum {
    EXPIRING_BALANCE("EXPIRING_BALANCE"),
    BALANCE_TO_LEVEL("BALANCE_TO_LEVEL"),
    BALANCE_TO_REWARD("BALANCE_TO_REWARD"),
    BALANCE("BALANCE"),
    TOTAL_BALANCE("TOTAL_BALANCE");

    public final String value;

    private RewardBalanceBalanceTypeEnum(String value) {
        this.value = value;
    }
}
