package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCustomObjectRecordByIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public DeleteCustomObjectRecordByIdHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public DeleteCustomObjectRecordByIdHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public DeleteCustomObjectRecordByIdHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Version")
    public LocalDate zuoraVersion;
    public DeleteCustomObjectRecordByIdHeaders withZuoraVersion(LocalDate zuoraVersion) {
        this.zuoraVersion = zuoraVersion;
        return this;
    }
}