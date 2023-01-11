package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportMeetings200ApplicationJson
 * Pagination Object.
**/
public class ReportMeetings200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public ReportMeetings200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meetings")
    public ReportMeetings200ApplicationJsonMeetings[] meetings;
    public ReportMeetings200ApplicationJson withMeetings(ReportMeetings200ApplicationJsonMeetings[] meetings) {
        this.meetings = meetings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ReportMeetings200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public ReportMeetings200ApplicationJson withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public ReportMeetings200ApplicationJson withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ReportMeetings200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public ReportMeetings200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ReportMeetings200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}