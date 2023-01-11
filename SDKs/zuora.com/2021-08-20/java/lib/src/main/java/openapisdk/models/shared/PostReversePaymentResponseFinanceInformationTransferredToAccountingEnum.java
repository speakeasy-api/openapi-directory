package openapisdk.models.shared;


public enum PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum {
    PROCESSING("Processing"),
    YES("Yes"),
    NO("No"),
    ERROR("Error"),
    IGNORE("Ignore");

    public final String value;

    private PostReversePaymentResponseFinanceInformationTransferredToAccountingEnum(String value) {
        this.value = value;
    }
}
