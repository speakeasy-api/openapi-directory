package openapisdk.models.shared;


public enum PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum {
    PROCESSING("Processing"),
    YES("Yes"),
    NO("No"),
    ERROR("Error"),
    IGNORE("Ignore");

    public final String value;

    private PostSettlePaymentResponseFinanceInformationTransferredToAccountingEnum(String value) {
        this.value = value;
    }
}
