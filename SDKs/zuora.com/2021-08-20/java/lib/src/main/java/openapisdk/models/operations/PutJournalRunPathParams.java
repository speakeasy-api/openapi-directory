package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutJournalRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jr-number")
    public String jrNumber;
    public PutJournalRunPathParams withJrNumber(String jrNumber) {
        this.jrNumber = jrNumber;
        return this;
    }
}