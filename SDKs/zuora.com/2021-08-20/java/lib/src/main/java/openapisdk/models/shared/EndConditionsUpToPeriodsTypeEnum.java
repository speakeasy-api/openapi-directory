package openapisdk.models.shared;


public enum EndConditionsUpToPeriodsTypeEnum {
    BILLING_PERIODS("Billing_Periods"),
    DAYS("Days"),
    WEEKS("Weeks"),
    MONTHS("Months"),
    YEARS("Years");

    public final String value;

    private EndConditionsUpToPeriodsTypeEnum(String value) {
        this.value = value;
    }
}
