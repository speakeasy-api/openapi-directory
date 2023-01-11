package openapisdk.models.shared;


public enum CoveragePlanTypeEnum {
    PPO("PPO"),
    HMO("HMO"),
    UNKNOWN("UNKNOWN");

    public final String value;

    private CoveragePlanTypeEnum(String value) {
        this.value = value;
    }
}
