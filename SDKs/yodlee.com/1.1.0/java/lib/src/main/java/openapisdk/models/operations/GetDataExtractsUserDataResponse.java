package openapisdk.models.operations;



public class GetDataExtractsUserDataResponse {
    public String contentType;
    public GetDataExtractsUserDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExtractsUserDataResponse dataExtractsUserDataResponse;
    public GetDataExtractsUserDataResponse withDataExtractsUserDataResponse(openapisdk.models.shared.DataExtractsUserDataResponse dataExtractsUserDataResponse) {
        this.dataExtractsUserDataResponse = dataExtractsUserDataResponse;
        return this;
    }
    public Long statusCode;
    public GetDataExtractsUserDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetDataExtractsUserDataResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}