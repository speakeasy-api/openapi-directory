package openapisdk.models.operations;



public class CashinResponse {
    public String contentType;
    public CashinResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CashinResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CashInResponse cashInResponse;
    public CashinResponse withCashInResponse(openapisdk.models.shared.CashInResponse cashInResponse) {
        this.cashInResponse = cashInResponse;
        return this;
    }
    public openapisdk.models.shared.Errors errors;
    public CashinResponse withErrors(openapisdk.models.shared.Errors errors) {
        this.errors = errors;
        return this;
    }
}