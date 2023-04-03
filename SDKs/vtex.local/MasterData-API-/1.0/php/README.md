# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### attachments

* `retrieveattachment` - Retrieve attachment
* `saveattachment` - Save attachment

### clusters

* `validateDocumentbyClusters` - Validate Document by Clusters

### dataEntities

* `getdataentitystructure` - Get data entity structure
* `listdataentities` - List data entities

### documents

* `createnewdocument` - Create new document
* `createorupdateentiredocument` - Create or update entire document
* `createorupdatepartialdocument` - Create or update partial document
* `deletedocument` - Delete document
* `getdocument` - Get document
* `updateentiredocument` - Update entire document
* `updatepartialdocument` - Update partial document

### score

* `deletescorebyfield` - Delete score by field
* `putscorebyfield` - Put score by field
* `putscores` - Put scores

### scroll

* `scrolldocuments` - Scroll documents

### search

* `searchdocuments` - Search documents

### versions

* `getversion` - Get version
* `listversions` - List versions
* `putversion` - Put version
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
