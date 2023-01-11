package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserContactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contactId")
    public String contactId;
    public GetUserContactPathParams withContactId(String contactId) {
        this.contactId = contactId;
        return this;
    }
}