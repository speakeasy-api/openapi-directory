package openapisdk.models.shared;


public enum TimeSlicedElpNetMetricsGeneratedReasonEnum {
    INCREASE_QUANTITY("IncreaseQuantity"),
    DECREASE_QUANTITY("DecreaseQuantity"),
    CHANGE_PRICE("ChangePrice"),
    EXTENSION("Extension"),
    CONTRACTION("Contraction");

    public final String value;

    private TimeSlicedElpNetMetricsGeneratedReasonEnum(String value) {
        this.value = value;
    }
}
