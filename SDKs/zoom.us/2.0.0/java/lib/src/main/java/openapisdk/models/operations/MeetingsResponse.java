package openapisdk.models.operations;



public class MeetingsResponse {
    public byte[] body;
    public MeetingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingsGroupList groupList;
    public MeetingsResponse withGroupList(MeetingsGroupList groupList) {
        this.groupList = groupList;
        return this;
    }
    public Long statusCode;
    public MeetingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}