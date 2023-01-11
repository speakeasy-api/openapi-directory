package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSummaryJournalEntryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=je-number")
    public String jeNumber;
    public GetSummaryJournalEntryPathParams withJeNumber(String jeNumber) {
        this.jeNumber = jeNumber;
        return this;
    }
}