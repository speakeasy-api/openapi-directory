package openapisdk.models.shared;


public enum AllowanceTypeEnum {
    CAR("CAR"),
    TRANSPORT("TRANSPORT"),
    TRAVEL("TRAVEL"),
    LAUNDRY("LAUNDRY"),
    MEALS("MEALS"),
    JOBKEEPER("JOBKEEPER"),
    OTHER("OTHER");

    public final String value;

    private AllowanceTypeEnum(String value) {
        this.value = value;
    }
}
