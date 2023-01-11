package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DashboardClientFeedbackDetail200ApplicationJson
 * Pagination object.
**/
public class DashboardClientFeedbackDetail200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_feedback_details")
    public DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails[] clientFeedbackDetails;
    public DashboardClientFeedbackDetail200ApplicationJson withClientFeedbackDetails(DashboardClientFeedbackDetail200ApplicationJsonClientFeedbackDetails[] clientFeedbackDetails) {
        this.clientFeedbackDetails = clientFeedbackDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public LocalDate from;
    public DashboardClientFeedbackDetail200ApplicationJson withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public DashboardClientFeedbackDetail200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public DashboardClientFeedbackDetail200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public LocalDate to;
    public DashboardClientFeedbackDetail200ApplicationJson withTo(LocalDate to) {
        this.to = to;
        return this;
    }
}