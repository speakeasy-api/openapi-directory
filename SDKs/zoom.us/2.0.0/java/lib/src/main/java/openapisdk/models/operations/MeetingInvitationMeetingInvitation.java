package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingInvitationMeetingInvitation
 * Meeting invitation details.
**/
public class MeetingInvitationMeetingInvitation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invitation")
    public String invitation;
    public MeetingInvitationMeetingInvitation withInvitation(String invitation) {
        this.invitation = invitation;
        return this;
    }
}