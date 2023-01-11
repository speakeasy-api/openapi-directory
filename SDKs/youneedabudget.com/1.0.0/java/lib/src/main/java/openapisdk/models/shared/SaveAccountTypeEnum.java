package openapisdk.models.shared;


public enum SaveAccountTypeEnum {
    CHECKING("checking"),
    SAVINGS("savings"),
    CREDIT_CARD("creditCard"),
    CASH("cash"),
    LINE_OF_CREDIT("lineOfCredit"),
    OTHER_ASSET("otherAsset"),
    OTHER_LIABILITY("otherLiability");

    public final String value;

    private SaveAccountTypeEnum(String value) {
        this.value = value;
    }
}
