package openapisdk.models.shared;


public enum RuleSetRuleSetTypeEnum {
    NSX_STANDARD("NSX_STANDARD"),
    NSX_REDIRECT("NSX_REDIRECT"),
    AWS_STANDARD("AWS_STANDARD");

    public final String value;

    private RuleSetRuleSetTypeEnum(String value) {
        this.value = value;
    }
}
