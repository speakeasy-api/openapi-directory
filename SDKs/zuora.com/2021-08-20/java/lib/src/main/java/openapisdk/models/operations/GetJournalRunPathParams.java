package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetJournalRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=jr-number")
    public String jrNumber;
    public GetJournalRunPathParams withJrNumber(String jrNumber) {
        this.jrNumber = jrNumber;
        return this;
    }
}