package openapisdk.models.shared;


public enum CreateReportModelReportTypeEnum {
    MALICIOUS_IP("MaliciousIP"),
    SPAMMING("Spamming"),
    REMOVE_PERMISSIONS("RemovePermissions"),
    OTHER("Other");

    public final String value;

    private CreateReportModelReportTypeEnum(String value) {
        this.value = value;
    }
}
