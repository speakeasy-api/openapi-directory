package openapisdk.models.shared;


public enum FirewallActionEnum {
    ALLOW("ALLOW"),
    ACCEPT("ACCEPT"),
    DENY("DENY"),
    DROP("DROP"),
    REJECT("REJECT"),
    REDIRECT("REDIRECT"),
    DO_NOT_REDIRECT("DO_NOT_REDIRECT");

    public final String value;

    private FirewallActionEnum(String value) {
        this.value = value;
    }
}
