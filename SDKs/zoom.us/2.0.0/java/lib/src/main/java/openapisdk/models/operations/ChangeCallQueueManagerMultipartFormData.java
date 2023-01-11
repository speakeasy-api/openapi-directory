package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeCallQueueManagerMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=member_id")
    public String memberId;
    public ChangeCallQueueManagerMultipartFormData withMemberId(String memberId) {
        this.memberId = memberId;
        return this;
    }
}