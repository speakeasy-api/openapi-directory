package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MeetingPollsPollList
 * Poll List
**/
public class MeetingPollsPollList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polls")
    public MeetingPollsPollListPoll[] polls;
    public MeetingPollsPollList withPolls(MeetingPollsPollListPoll[] polls) {
        this.polls = polls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public MeetingPollsPollList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}