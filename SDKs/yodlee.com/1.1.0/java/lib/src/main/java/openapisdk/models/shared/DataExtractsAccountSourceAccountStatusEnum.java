package openapisdk.models.shared;


public enum DataExtractsAccountSourceAccountStatusEnum {
    IN_REPAYMENT("IN_REPAYMENT"),
    DEFAULTED("DEFAULTED"),
    IN_SCHOOL("IN_SCHOOL"),
    IN_GRACE_PERIOD("IN_GRACE_PERIOD"),
    DELINQUENCY("DELINQUENCY"),
    DEFERMENT("DEFERMENT"),
    FORBEARANCE("FORBEARANCE");

    public final String value;

    private DataExtractsAccountSourceAccountStatusEnum(String value) {
        this.value = value;
    }
}
