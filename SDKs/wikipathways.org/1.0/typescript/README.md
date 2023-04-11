# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/wikipathways.org/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/wikipathways.org/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  GetFindInteractionsRequest,
  GetFindInteractionsResponse,
  GetFindInteractionsFormatEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: GetFindInteractionsRequest = {
  format: GetFindInteractionsFormatEnum.Dump,
  query: "provident",
};

sdk.allFunctions.getFindInteractions(req).then((res: GetFindInteractionsResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### allFunctions

* `getFindInteractions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `getFindPathwaysByLiterature` - findPathwaysByLiterature
* `getFindPathwaysByText` - findPathwaysByText
* `getFindPathwaysByXref` - findPathwaysByXref
* `getGetColoredPathway` - getColoredPathwayGet a colored image version of the pathway.
* `getGetCurationTagHistory` - getCurationTagHistory
* `getGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `getGetPathway` - getPathway
* `getGetPathwayAs` - getPathwayAsDownload a pathway in the specified file format.
* `getGetPathwayHistory` - getPathwayHistoryGet the revision history of a pathway.
* `getGetPathwayInfo` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
* `getGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `getGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `getGetRecentChanges` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
* `getGetUserByOrcid` - getUserByOrcid
* `getGetXrefList` - getXrefList
* `getListOrganisms` - listOrganisms
* `getListPathways` - listPathways
* `getLogin` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
* `getRemoveCurationTag` - removeCurationTagRemove a curation tag from a pathway.
* `getRemoveOntologyTag` - removeOntologyTag
* `getSaveCurationTag` - saveCurationTag
* `getSaveOntologyTag` - saveOntologyTag
* `getUpdatePathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `postCreatePathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

### curationTags

* `getGetCurationTagHistory` - getCurationTagHistory
* `getGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `getSaveCurationTag` - saveCurationTag

### download

* `getGetColoredPathway` - getColoredPathwayGet a colored image version of the pathway.
* `getGetPathwayAs` - getPathwayAsDownload a pathway in the specified file format.
* `getGetXrefList` - getXrefList

### history

* `getGetCurationTagHistory` - getCurationTagHistory
* `getGetPathwayHistory` - getPathwayHistoryGet the revision history of a pathway.
* `getGetRecentChanges` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### ontologyTags

* `getGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `getGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `getRemoveOntologyTag` - removeOntologyTag
* `getSaveOntologyTag` - saveOntologyTag

### organismList

* `getListOrganisms` - listOrganisms

### pathwayInformation

* `getGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `getGetPathway` - getPathway
* `getGetPathwayInfo` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### pathwayList

* `getGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `getGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `getListPathways` - listPathways

### search

* `getFindInteractions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `getFindPathwaysByLiterature` - findPathwaysByLiterature
* `getFindPathwaysByText` - findPathwaysByText
* `getFindPathwaysByXref` - findPathwaysByXref
* `getRemoveCurationTag` - removeCurationTagRemove a curation tag from a pathway.

### userManagement

* `getGetUserByOrcid` - getUserByOrcid
* `getLogin` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### writeCreateUpdateDelete

* `getRemoveOntologyTag` - removeOntologyTag
* `getSaveCurationTag` - saveCurationTag
* `getSaveOntologyTag` - saveOntologyTag
* `getUpdatePathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `postCreatePathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

