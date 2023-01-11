package openapisdk.models.operations;



public class GetCustomExchangeRatesResponse {
    public String contentType;
    public GetCustomExchangeRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCustomExchangeRatesType getCustomExchangeRatesType;
    public GetCustomExchangeRatesResponse withGetCustomExchangeRatesType(openapisdk.models.shared.GetCustomExchangeRatesType getCustomExchangeRatesType) {
        this.getCustomExchangeRatesType = getCustomExchangeRatesType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomExchangeRatesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomExchangeRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}