package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPollsPollList
 * Poll List
**/
public class WebinarPollsPollList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polls")
    public WebinarPollsPollListPoll[] polls;
    public WebinarPollsPollList withPolls(WebinarPollsPollListPoll[] polls) {
        this.polls = polls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public WebinarPollsPollList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}