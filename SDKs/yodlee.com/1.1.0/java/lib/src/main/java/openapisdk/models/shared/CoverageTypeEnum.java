package openapisdk.models.shared;


public enum CoverageTypeEnum {
    VISION("VISION"),
    DENTAL("DENTAL"),
    MEDICAL("MEDICAL"),
    HEALTH("HEALTH"),
    DEATH_COVER("DEATH_COVER"),
    TOTAL_PERMANENT_DISABILITY("TOTAL_PERMANENT_DISABILITY"),
    ACCIDENTAL_DEATH_COVER("ACCIDENTAL_DEATH_COVER"),
    INCOME_PROTECTION("INCOME_PROTECTION"),
    DEATH_TOTAL_PERMANENT_DISABILITY("DEATH_TOTAL_PERMANENT_DISABILITY"),
    OTHER("OTHER");

    public final String value;

    private CoverageTypeEnum(String value) {
        this.value = value;
    }
}
