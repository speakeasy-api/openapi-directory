package openapisdk.models.shared;


public enum TimeSlicedMetricsGeneratedReasonEnum {
    INCREASE_QUANTITY("IncreaseQuantity"),
    DECREASE_QUANTITY("DecreaseQuantity"),
    CHANGE_PRICE("ChangePrice"),
    EXTENSION("Extension"),
    CONTRACTION("Contraction");

    public final String value;

    private TimeSlicedMetricsGeneratedReasonEnum(String value) {
        this.value = value;
    }
}
