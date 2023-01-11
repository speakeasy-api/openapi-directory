package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSummaryJournalEntryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=je-number")
    public String jeNumber;
    public DeleteSummaryJournalEntryPathParams withJeNumber(String jeNumber) {
        this.jeNumber = jeNumber;
        return this;
    }
}