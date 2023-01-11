package openapisdk.models.shared;


public enum RecommendedRuleActionEnum {
    ALLOW("ALLOW"),
    DROP("DROP");

    public final String value;

    private RecommendedRuleActionEnum(String value) {
        this.value = value;
    }
}
