package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastMeetingFiles200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting_files")
    public ListPastMeetingFiles200ApplicationJsonInMeetingFiles[] inMeetingFiles;
    public ListPastMeetingFiles200ApplicationJson withInMeetingFiles(ListPastMeetingFiles200ApplicationJsonInMeetingFiles[] inMeetingFiles) {
        this.inMeetingFiles = inMeetingFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListPastMeetingFiles200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}