package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPastWebinarFiles200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_meeting_files")
    public ListPastWebinarFiles200ApplicationJsonInMeetingFiles[] inMeetingFiles;
    public ListPastWebinarFiles200ApplicationJson withInMeetingFiles(ListPastWebinarFiles200ApplicationJsonInMeetingFiles[] inMeetingFiles) {
        this.inMeetingFiles = inMeetingFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ListPastWebinarFiles200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}