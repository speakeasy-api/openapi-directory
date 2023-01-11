package openapisdk.models.operations;



public class GroupsCreateResponse {
    public java.util.Map<String, java.util.Map<String, Object>> adGroup;
    public GroupsCreateResponse withAdGroup(java.util.Map<String, java.util.Map<String, Object>> adGroup) {
        this.adGroup = adGroup;
        return this;
    }
    public String contentType;
    public GroupsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GraphError graphError;
    public GroupsCreateResponse withGraphError(openapisdk.models.shared.GraphError graphError) {
        this.graphError = graphError;
        return this;
    }
    public Long statusCode;
    public GroupsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}