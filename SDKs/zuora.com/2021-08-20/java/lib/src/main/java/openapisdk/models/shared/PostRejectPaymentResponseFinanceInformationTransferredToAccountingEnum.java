package openapisdk.models.shared;


public enum PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum {
    PROCESSING("Processing"),
    YES("Yes"),
    NO("No"),
    ERROR("Error"),
    IGNORE("Ignore");

    public final String value;

    private PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum(String value) {
        this.value = value;
    }
}
