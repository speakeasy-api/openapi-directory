package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteJournalRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jr-number")
    public String jrNumber;
    public DeleteJournalRunPathParams withJrNumber(String jrNumber) {
        this.jrNumber = jrNumber;
        return this;
    }
}