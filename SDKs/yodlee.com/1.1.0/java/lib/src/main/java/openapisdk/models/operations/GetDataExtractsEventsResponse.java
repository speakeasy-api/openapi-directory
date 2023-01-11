package openapisdk.models.operations;



public class GetDataExtractsEventsResponse {
    public String contentType;
    public GetDataExtractsEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataExtractsEventResponse dataExtractsEventResponse;
    public GetDataExtractsEventsResponse withDataExtractsEventResponse(openapisdk.models.shared.DataExtractsEventResponse dataExtractsEventResponse) {
        this.dataExtractsEventResponse = dataExtractsEventResponse;
        return this;
    }
    public Long statusCode;
    public GetDataExtractsEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.YodleeError yodleeError;
    public GetDataExtractsEventsResponse withYodleeError(openapisdk.models.shared.YodleeError yodleeError) {
        this.yodleeError = yodleeError;
        return this;
    }
}