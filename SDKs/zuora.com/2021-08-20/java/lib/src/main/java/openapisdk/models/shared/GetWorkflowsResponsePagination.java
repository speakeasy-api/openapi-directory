package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetWorkflowsResponsePagination
 * An object containing pagination information for the list of workflows returned by the api
 * 
**/
public class GetWorkflowsResponsePagination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page")
    public String nextPage;
    public GetWorkflowsResponsePagination withNextPage(String nextPage) {
        this.nextPage = nextPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public GetWorkflowsResponsePagination withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_length")
    public Long pageLength;
    public GetWorkflowsResponsePagination withPageLength(Long pageLength) {
        this.pageLength = pageLength;
        return this;
    }
}