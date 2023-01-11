package openapisdk.models.shared;


public enum LinkageLinkageTypeEnum {
    START("Start"),
    SUCCESS("Success"),
    FAILURE("Failure"),
    ITERATE("Iterate"),
    TRUE("true"),
    FALSE("false"),
    APPROVE("Approve"),
    REJECT("Reject");

    public final String value;

    private LinkageLinkageTypeEnum(String value) {
        this.value = value;
    }
}
