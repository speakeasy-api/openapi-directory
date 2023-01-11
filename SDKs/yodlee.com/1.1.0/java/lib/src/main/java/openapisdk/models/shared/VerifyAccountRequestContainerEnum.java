package openapisdk.models.shared;


public enum VerifyAccountRequestContainerEnum {
    BANK("bank"),
    CREDIT_CARD("creditCard"),
    INVESTMENT("investment"),
    INSURANCE("insurance"),
    LOAN("loan"),
    REWARD("reward"),
    REAL_ESTATE("realEstate"),
    OTHER_ASSETS("otherAssets"),
    OTHER_LIABILITIES("otherLiabilities");

    public final String value;

    private VerifyAccountRequestContainerEnum(String value) {
        this.value = value;
    }
}
