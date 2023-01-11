package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetUserCollectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=languagePreference")
    public AlbumApiGetUserCollectionsLanguagePreferenceEnum languagePreference;
    public AlbumApiGetUserCollectionsQueryParams withLanguagePreference(AlbumApiGetUserCollectionsLanguagePreferenceEnum languagePreference) {
        this.languagePreference = languagePreference;
        return this;
    }
}