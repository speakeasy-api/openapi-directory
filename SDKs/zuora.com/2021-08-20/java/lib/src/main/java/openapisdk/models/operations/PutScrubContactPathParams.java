package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutScrubContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contactId")
    public String contactId;
    public PutScrubContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}