package openapisdk.models.operations;



public class AssignCallingPlanResponse {
    public byte[] body;
    public AssignCallingPlanResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AssignCallingPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssignCallingPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object assignCallingPlan200ApplicationJSONAny;
    public AssignCallingPlanResponse withAssignCallingPlan200ApplicationJsonAny(Object assignCallingPlan200ApplicationJSONAny) {
        this.assignCallingPlan200ApplicationJSONAny = assignCallingPlan200ApplicationJSONAny;
        return this;
    }
}