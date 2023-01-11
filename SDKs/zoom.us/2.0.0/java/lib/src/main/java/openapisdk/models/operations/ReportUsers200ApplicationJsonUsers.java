package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportUsers200ApplicationJsonUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_attributes")
    public ReportUsers200ApplicationJsonUsersCustomAttributes customAttributes;
    public ReportUsers200ApplicationJsonUsers withCustomAttributes(ReportUsers200ApplicationJsonUsersCustomAttributes customAttributes) {
        this.customAttributes = customAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dept")
    public String dept;
    public ReportUsers200ApplicationJsonUsers withDept(String dept) {
        this.dept = dept;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ReportUsers200ApplicationJsonUsers withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ReportUsers200ApplicationJsonUsers withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_minutes")
    public Long meetingMinutes;
    public ReportUsers200ApplicationJsonUsers withMeetingMinutes(Long meetingMinutes) {
        this.meetingMinutes = meetingMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public Long meetings;
    public ReportUsers200ApplicationJsonUsers withMeetings(Long meetings) {
        this.meetings = meetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants")
    public Long participants;
    public ReportUsers200ApplicationJsonUsers withParticipants(Long participants) {
        this.participants = participants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public ReportUsers200ApplicationJsonUsers withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public ReportUsers200ApplicationJsonUsers withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}