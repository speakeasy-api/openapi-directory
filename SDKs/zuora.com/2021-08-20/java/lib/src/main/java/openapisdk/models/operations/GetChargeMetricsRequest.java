package openapisdk.models.operations;



public class GetChargeMetricsRequest {
    public GetChargeMetricsQueryParams queryParams;
    public GetChargeMetricsRequest withQueryParams(GetChargeMetricsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetChargeMetricsHeaders headers;
    public GetChargeMetricsRequest withHeaders(GetChargeMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
}