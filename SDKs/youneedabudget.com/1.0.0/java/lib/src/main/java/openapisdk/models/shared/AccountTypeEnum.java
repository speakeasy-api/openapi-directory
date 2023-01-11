package openapisdk.models.shared;


public enum AccountTypeEnum {
    CHECKING("checking"),
    SAVINGS("savings"),
    CASH("cash"),
    CREDIT_CARD("creditCard"),
    LINE_OF_CREDIT("lineOfCredit"),
    OTHER_ASSET("otherAsset"),
    OTHER_LIABILITY("otherLiability"),
    PAY_PAL("payPal"),
    MERCHANT_ACCOUNT("merchantAccount"),
    INVESTMENT_ACCOUNT("investmentAccount"),
    MORTGAGE("mortgage");

    public final String value;

    private AccountTypeEnum(String value) {
        this.value = value;
    }
}
