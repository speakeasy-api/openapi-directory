package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserTspCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UserTspCreateTspAccountsList tspAccountsList;
    public UserTspCreateRequests withTspAccountsList(UserTspCreateTspAccountsList tspAccountsList) {
        this.tspAccountsList = tspAccountsList;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserTspCreateTspAccountsList tspAccountsList1;
    public UserTspCreateRequests withTspAccountsList1(UserTspCreateTspAccountsList tspAccountsList1) {
        this.tspAccountsList1 = tspAccountsList1;
        return this;
    }
}