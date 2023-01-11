package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PastMeetingsMeetingInstances
 * List of Meetings
**/
public class PastMeetingsMeetingInstances {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public PastMeetingsMeetingInstancesMeetings[] meetings;
    public PastMeetingsMeetingInstances withMeetings(PastMeetingsMeetingInstancesMeetings[] meetings) {
        this.meetings = meetings;
        return this;
    }
}