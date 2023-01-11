package openapisdk.models.shared;


public enum ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum {
    AUTHORIZATION("Authorization"),
    SALE("Sale"),
    VOID("Void"),
    INQUIRY("Inquiry"),
    VOID_AUTH("VoidAuth");

    public final String value;

    private ProxyGetPaymentTransactionLogGatewayTransactionTypeEnum(String value) {
        this.value = value;
    }
}
