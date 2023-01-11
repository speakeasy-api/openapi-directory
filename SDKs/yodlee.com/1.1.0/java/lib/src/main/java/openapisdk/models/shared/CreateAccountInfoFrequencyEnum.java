package openapisdk.models.shared;


public enum CreateAccountInfoFrequencyEnum {
    DAILY("DAILY"),
    ONE_TIME("ONE_TIME"),
    WEEKLY("WEEKLY"),
    EVERY2_WEEKS("EVERY_2_WEEKS"),
    SEMI_MONTHLY("SEMI_MONTHLY"),
    MONTHLY("MONTHLY"),
    QUARTERLY("QUARTERLY"),
    SEMI_ANNUALLY("SEMI_ANNUALLY"),
    ANNUALLY("ANNUALLY"),
    EVERY2_MONTHS("EVERY_2_MONTHS"),
    EBILL("EBILL"),
    FIRST_DAY_MONTHLY("FIRST_DAY_MONTHLY"),
    LAST_DAY_MONTHLY("LAST_DAY_MONTHLY"),
    EVERY4_WEEKS("EVERY_4_WEEKS"),
    UNKNOWN("UNKNOWN"),
    OTHER("OTHER");

    public final String value;

    private CreateAccountInfoFrequencyEnum(String value) {
        this.value = value;
    }
}
