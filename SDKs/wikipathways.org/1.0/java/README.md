# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetFindInteractionsRequest req = new GetFindInteractionsRequest() {{
                queryParams = new GetFindInteractionsQueryParams() {{
                    format = "json";
                    query = "voluptas";
                }};
            }};

            GetFindInteractionsResponse res = sdk.allFunctions.getFindInteractions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### All functions

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

### Curation tags

* `getGetCurationTagHistory` - getCurationTagHistory
* `getGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `getSaveCurationTag` - saveCurationTag

### Download

* `getGetColoredPathway` - getColoredPathwayGet a colored image version of the pathway.
* `getGetPathwayAs` - getPathwayAsDownload a pathway in the specified file format.
* `getGetXrefList` - getXrefList

### History

* `getGetCurationTagHistory` - getCurationTagHistory
* `getGetPathwayHistory` - getPathwayHistoryGet the revision history of a pathway.
* `getGetRecentChanges` - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.

### Ontology tags

* `getGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `getGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `getRemoveOntologyTag` - removeOntologyTag
* `getSaveOntologyTag` - saveOntologyTag

### Organism list

* `getListOrganisms` - listOrganisms

### Pathway information

* `getGetCurationTags` - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetOntologyTermsByPathway` - getOntologyTermsByPathway
* `getGetPathway` - getPathway
* `getGetPathwayInfo` - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.

### Pathway list

* `getGetCurationTagsByName` - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
* `getGetPathwaysByOntologyTerm` - getPathwaysByOntologyTerm
* `getGetPathwaysByParentOntologyTerm` - getPathwaysByParentOntologyTerm
* `getListPathways` - listPathways

### Search

* `getFindInteractions` - findInteractionsFind interactions defined in WikiPathways pathways.
* `getFindPathwaysByLiterature` - findPathwaysByLiterature
* `getFindPathwaysByText` - findPathwaysByText
* `getFindPathwaysByXref` - findPathwaysByXref
* `getRemoveCurationTag` - removeCurationTagRemove a curation tag from a pathway.

### User management

* `getGetUserByOrcid` - getUserByOrcid
* `getLogin` - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).

### Write (create/update/delete)

* `getRemoveOntologyTag` - removeOntologyTag
* `getSaveCurationTag` - saveCurationTag
* `getSaveOntologyTag` - saveOntologyTag
* `getUpdatePathway` - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
* `postCreatePathway` - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
