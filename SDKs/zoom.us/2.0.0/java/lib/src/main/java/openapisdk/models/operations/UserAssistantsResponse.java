package openapisdk.models.operations;



public class UserAssistantsResponse {
    public byte[] body;
    public UserAssistantsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserAssistantsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserAssistantsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserAssistantsUserAssistantsList userAssistantsList;
    public UserAssistantsResponse withUserAssistantsList(UserAssistantsUserAssistantsList userAssistantsList) {
        this.userAssistantsList = userAssistantsList;
        return this;
    }
}