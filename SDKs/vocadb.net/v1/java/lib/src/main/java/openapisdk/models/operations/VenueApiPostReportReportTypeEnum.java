package openapisdk.models.operations;


public enum VenueApiPostReportReportTypeEnum {
    INVALID_INFO("InvalidInfo"),
    DUPLICATE("Duplicate"),
    INAPPROPRIATE("Inappropriate"),
    OTHER("Other");

    public final String value;

    private VenueApiPostReportReportTypeEnum(String value) {
        this.value = value;
    }
}
