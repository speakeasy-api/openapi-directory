package openapisdk.models.shared;


public enum CalendarTypeEnum {
    WEEKLY("WEEKLY"),
    FORTNIGHTLY("FORTNIGHTLY"),
    FOURWEEKLY("FOURWEEKLY"),
    MONTHLY("MONTHLY"),
    TWICEMONTHLY("TWICEMONTHLY"),
    QUARTERLY("QUARTERLY");

    public final String value;

    private CalendarTypeEnum(String value) {
        this.value = value;
    }
}
