package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportTelephone200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public ReportTelephone200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public Long nextPageToken;
    public ReportTelephone200ApplicationJson withNextPageToken(Long nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_count")
    public Long pageCount;
    public ReportTelephone200ApplicationJson withPageCount(Long pageCount) {
        this.pageCount = pageCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public ReportTelephone200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("telephony_usage")
    public ReportTelephone200ApplicationJsonTelephonyUsage[] telephonyUsage;
    public ReportTelephone200ApplicationJson withTelephonyUsage(ReportTelephone200ApplicationJsonTelephonyUsage[] telephonyUsage) {
        this.telephonyUsage = telephonyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public ReportTelephone200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public ReportTelephone200ApplicationJson withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}