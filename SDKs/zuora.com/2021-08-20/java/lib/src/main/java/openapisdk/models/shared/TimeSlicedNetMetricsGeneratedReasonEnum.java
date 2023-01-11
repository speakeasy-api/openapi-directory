package openapisdk.models.shared;


public enum TimeSlicedNetMetricsGeneratedReasonEnum {
    INCREASE_QUANTITY("IncreaseQuantity"),
    DECREASE_QUANTITY("DecreaseQuantity"),
    CHANGE_PRICE("ChangePrice"),
    EXTENSION("Extension"),
    CONTRACTION("Contraction");

    public final String value;

    private TimeSlicedNetMetricsGeneratedReasonEnum(String value) {
        this.value = value;
    }
}
