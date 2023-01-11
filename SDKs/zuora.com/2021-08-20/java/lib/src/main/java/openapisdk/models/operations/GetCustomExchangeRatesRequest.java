package openapisdk.models.operations;



public class GetCustomExchangeRatesRequest {
    public GetCustomExchangeRatesPathParams pathParams;
    public GetCustomExchangeRatesRequest withPathParams(GetCustomExchangeRatesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCustomExchangeRatesQueryParams queryParams;
    public GetCustomExchangeRatesRequest withQueryParams(GetCustomExchangeRatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCustomExchangeRatesHeaders headers;
    public GetCustomExchangeRatesRequest withHeaders(GetCustomExchangeRatesHeaders headers) {
        this.headers = headers;
        return this;
    }
}