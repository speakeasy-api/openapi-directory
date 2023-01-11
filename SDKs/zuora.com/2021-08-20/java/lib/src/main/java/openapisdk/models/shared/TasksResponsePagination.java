package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TasksResponsePagination
 * An object containing pagination information for the list of tasks returned by the API.
 * 
**/
public class TasksResponsePagination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page")
    public String nextPage;
    public TasksResponsePagination withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public TasksResponsePagination withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_length")
    public Long pageLength;
    public TasksResponsePagination withPageLength(Long pageLength) {
        this.pageLength = pageLength;
        return this;
    }
}