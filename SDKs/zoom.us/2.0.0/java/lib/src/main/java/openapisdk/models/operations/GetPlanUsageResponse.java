package openapisdk.models.operations;



public class GetPlanUsageResponse {
    public byte[] body;
    public GetPlanUsageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPlanUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPlanUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPlanUsage200ApplicationJson getPlanUsage200ApplicationJSONObject;
    public GetPlanUsageResponse withGetPlanUsage200ApplicationJsonObject(GetPlanUsage200ApplicationJson getPlanUsage200ApplicationJSONObject) {
        this.getPlanUsage200ApplicationJSONObject = getPlanUsage200ApplicationJSONObject;
        return this;
    }
}