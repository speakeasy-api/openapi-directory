package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllSummaryJournalEntriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jr-number")
    public String jrNumber;
    public GetAllSummaryJournalEntriesPathParams withJrNumber(String jrNumber) {
        this.jrNumber = jrNumber;
        return this;
    }
}