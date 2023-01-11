package openapisdk.models.shared;


public enum UpdateAccountInfoContainerEnum {
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

    private UpdateAccountInfoContainerEnum(String value) {
        this.value = value;
    }
}
