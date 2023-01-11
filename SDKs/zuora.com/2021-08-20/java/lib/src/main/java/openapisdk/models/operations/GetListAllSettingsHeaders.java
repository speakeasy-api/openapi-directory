package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAllSettingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public GetListAllSettingsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetListAllSettingsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Entity-Ids")
    public String zuoraEntityIds;
    public GetListAllSettingsHeaders withZuoraEntityIds(String zuoraEntityIds) {
        this.zuoraEntityIds = zuoraEntityIds;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Zuora-Track-Id")
    public String zuoraTrackId;
    public GetListAllSettingsHeaders withZuoraTrackId(String zuoraTrackId) {
        this.zuoraTrackId = zuoraTrackId;
        return this;
    }
}