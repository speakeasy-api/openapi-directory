package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutSummaryJournalEntryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=je-number")
    public String jeNumber;
    public PutSummaryJournalEntryPathParams withJeNumber(String jeNumber) {
        this.jeNumber = jeNumber;
        return this;
    }
}