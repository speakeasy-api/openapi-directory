package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportSignInSignOutActivities200ApplicationJson
 * Report object
**/
public class ReportSignInSignOutActivities200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_logs")
    public ReportSignInSignOutActivities200ApplicationJsonActivityLogs[] activityLogs;
    public ReportSignInSignOutActivities200ApplicationJson withActivityLogs(ReportSignInSignOutActivities200ApplicationJsonActivityLogs[] activityLogs) {
        this.activityLogs = activityLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public ReportSignInSignOutActivities200ApplicationJson withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_token")
    public String nextPageToken;
    public ReportSignInSignOutActivities200ApplicationJson withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public String pageSize;
    public ReportSignInSignOutActivities200ApplicationJson withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public ReportSignInSignOutActivities200ApplicationJson withTo(String to) {
        this.to = to;
        return this;
    }
}