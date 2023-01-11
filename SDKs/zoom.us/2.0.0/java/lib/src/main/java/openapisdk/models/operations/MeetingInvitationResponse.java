package openapisdk.models.operations;



public class MeetingInvitationResponse {
    public byte[] body;
    public MeetingInvitationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public MeetingInvitationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public MeetingInvitationMeetingInvitation meetingInvitation;
    public MeetingInvitationResponse withMeetingInvitation(MeetingInvitationMeetingInvitation meetingInvitation) {
        this.meetingInvitation = meetingInvitation;
        return this;
    }
    public Long statusCode;
    public MeetingInvitationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}