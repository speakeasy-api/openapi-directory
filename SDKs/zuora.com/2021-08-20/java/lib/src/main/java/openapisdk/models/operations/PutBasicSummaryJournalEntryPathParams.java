package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutBasicSummaryJournalEntryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=je-number")
    public String jeNumber;
    public PutBasicSummaryJournalEntryPathParams withJeNumber(String jeNumber) {
        this.jeNumber = jeNumber;
        return this;
    }
}