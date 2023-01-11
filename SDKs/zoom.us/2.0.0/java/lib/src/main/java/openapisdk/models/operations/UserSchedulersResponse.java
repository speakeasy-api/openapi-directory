package openapisdk.models.operations;



public class UserSchedulersResponse {
    public byte[] body;
    public UserSchedulersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserSchedulersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserSchedulersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserSchedulersUserSchedulersList userSchedulersList;
    public UserSchedulersResponse withUserSchedulersList(UserSchedulersUserSchedulersList userSchedulersList) {
        this.userSchedulersList = userSchedulersList;
        return this;
    }
}