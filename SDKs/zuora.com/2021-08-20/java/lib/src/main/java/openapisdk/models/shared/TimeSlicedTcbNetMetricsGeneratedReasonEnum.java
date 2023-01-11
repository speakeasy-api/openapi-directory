package openapisdk.models.shared;


public enum TimeSlicedTcbNetMetricsGeneratedReasonEnum {
    INCREASE_QUANTITY("IncreaseQuantity"),
    DECREASE_QUANTITY("DecreaseQuantity"),
    CHANGE_PRICE("ChangePrice"),
    EXTENSION("Extension"),
    CONTRACTION("Contraction");

    public final String value;

    private TimeSlicedTcbNetMetricsGeneratedReasonEnum(String value) {
        this.value = value;
    }
}
