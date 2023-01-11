package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllSummaryJournalEntriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetAllSummaryJournalEntriesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}