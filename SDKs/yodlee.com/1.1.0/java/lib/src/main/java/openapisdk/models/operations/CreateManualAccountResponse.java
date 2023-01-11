package openapisdk.models.operations;



public class CreateManualAccountResponse {
    public String contentType;
    public CreateManualAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatedAccountResponse createdAccountResponse;
    public CreateManualAccountResponse withCreatedAccountResponse(openapisdk.models.shared.CreatedAccountResponse createdAccountResponse) {
        this.createdAccountResponse = createdAccountResponse;
        return this;
    }
    public Long statusCode;
    public CreateManualAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public CreateManualAccountResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}