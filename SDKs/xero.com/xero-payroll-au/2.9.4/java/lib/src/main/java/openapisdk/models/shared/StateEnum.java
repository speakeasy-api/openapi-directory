package openapisdk.models.shared;


public enum StateEnum {
    ACT("ACT"),
    NSW("NSW"),
    NT("NT"),
    QLD("QLD"),
    SA("SA"),
    TAS("TAS"),
    VIC("VIC"),
    WA("WA");

    public final String value;

    private StateEnum(String value) {
        this.value = value;
    }
}
