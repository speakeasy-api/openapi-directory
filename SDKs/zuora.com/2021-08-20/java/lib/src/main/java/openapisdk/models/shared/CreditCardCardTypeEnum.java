package openapisdk.models.shared;


public enum CreditCardCardTypeEnum {
    VISA("Visa"),
    MASTER_CARD("MasterCard"),
    AMERICAN_EXPRESS("AmericanExpress"),
    DISCOVER("Discover"),
    JCB("JCB"),
    DINERS("Diners"),
    CUP("CUP"),
    MAESTRO("Maestro"),
    ELECTRON("Electron"),
    APPLE_VISA("AppleVisa"),
    APPLE_MASTER_CARD("AppleMasterCard"),
    APPLE_AMERICAN_EXPRESS("AppleAmericanExpress"),
    APPLE_DISCOVER("AppleDiscover"),
    APPLE_JCB("AppleJCB"),
    ELO("Elo"),
    HIPERCARD("Hipercard"),
    NARANJA("Naranja"),
    NATIVA("Nativa"),
    TARJETA_SHOPPING("TarjetaShopping"),
    CENCOSUD("Cencosud"),
    ARGENCARD("Argencard"),
    CABAL("Cabal");

    public final String value;

    private CreditCardCardTypeEnum(String value) {
        this.value = value;
    }
}
