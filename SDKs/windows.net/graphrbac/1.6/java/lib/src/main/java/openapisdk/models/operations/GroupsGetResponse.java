package openapisdk.models.operations;



public class GroupsGetResponse {
    public java.util.Map<String, java.util.Map<String, Object>> adGroup;
    public GroupsGetResponse withAdGroup(java.util.Map<String, java.util.Map<String, Object>> adGroup) {
        this.adGroup = adGroup;
        return this;
    }
    public String contentType;
    public GroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsGetResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}