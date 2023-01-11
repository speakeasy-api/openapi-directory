package openapisdk.models.shared;


public enum FlowTrafficTypeEnum {
    INTERNET_TRAFFIC("INTERNET_TRAFFIC"),
    EAST_WEST_TRAFFIC("EAST_WEST_TRAFFIC");

    public final String value;

    private FlowTrafficTypeEnum(String value) {
        this.value = value;
    }
}
