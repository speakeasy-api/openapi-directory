# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xtrf.eu/2.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/xtrf.eu/2.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  BrowseCSVRequest,
  BrowseCSVResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    xAuthAccessToken: "YOUR_API_KEY_HERE",
  },
});

const req: BrowseCSVRequest = {
  additionalOrder: "corrupti",
  secondarySeparator: "provident",
  separator: "distinctio",
  viewId: 844266,
};

sdk.browser.browseCSV(req).then((res: BrowseCSVResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### browser

* `browseCSV` - Searches for data (ie. customer, task, etc) and returns it in a CSV form.
* `browseJSON` - Searches for data (ie. customer, task, etc) and returns it in a tabular form.
* `create` - Creates view for given class.
* `delete` - Removes a view.
* `deleteColumn` - Deletes a single column from view.
* `get` - Returns all view's information.
* `getColumnSettings` - Returns column's specific settings.
* `getColumns` - Returns columns defined in view.
* `getCurrentViewDetails` - Returns current view's detailed information, suitable for browser.
* `getFilter` - Returns view's filter.
* `getLocalSettings` - Returns view's local settings (for current user).
* `getOrder` - Returns view's order settings.
* `getPermissions` - Returns view's permissions.
* `getSettings` - Returns view's settings.
* `getViewDetails` - Returns view's detailed information, suitable for browser.
* `getViewsBrief` - Returns views' brief.
* `selectViewAndGetItsDetails` - Selects given view as current and returns its detailed information, suitable for browser.
* `update` - Updates all view's information.
* `updateColumnSettings` - Updates column's specific settings.
* `updateColumns` - Updates columns in view.
* `updateFilter` - Updates view's filter.
* `updateFilterProperty` - Updates view's filter property.
* `updateLocalSettings` - Updates view's local settings (for current user).
* `updateOrder` - Updates view's order settings.
* `updatePermissions` - Updates view's permissions.
* `updateSettings` - Updates view's settings.

### clientInvoices

* `createPayment` - Adds a new payment to the client invoice. The invoice payment status (Not Paid, Partially Paid, Fully Paid) is automatically recalculated.
* `create1` - Creates a new invoice.
* `delete1` - Removes a client invoice.
* `delete2` - Removes a customer payment.
* `downloadDocuments` - Generates client invoices' documents.
* `duplicate` - Duplicate client invoice.
* `duplicateAsProForma` - Duplicate client invoice as pro forma.
* `getAll` - Lists all client invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `getAllIds` - Returns client invoices' internal identifiers.
* `getById` - Returns client invoice details.
* `getDates` - Returns dates of a given client invoice.
* `getDocument` - Generates client invoice document (PDF).
* `getPaymentTerms` - Returns payment terms of a given client invoice.
* `getPayments` - Returns all payments for the client invoice.
* `sendReminder` - Sends reminder.
* `sendReminders` - Sends reminders. Returns number of sent e-mails.

### clients

* `create2` - Creates a new person.
* `create3` - Creates a new client.
* `delete3` - Removes a person.
* `delete4` - Removes a customer price list.
* `delete5` - Removes a client.
* `generateSingleUseSignInToken` - Generates a single use sign-in token.
* `getAddress` - Returns address of a given client.
* `getAllIds1` - Returns persons' internal identifiers.
* `getAllIds2` - Returns clients' internal identifiers.
* `getAllNamesWithIds` - Returns list of simple clients representations
* `getById1` - Returns person details.
* `getById2` - Returns client details.
* `getCategories` - Returns categories of a given client.
* `getContact` - Returns contact of a given person.
* `getContact1` - Returns contact of a given client.
* `getCorrespondenceAddress` - Returns correspondence address of a given client.
* `getCustomField` - Returns custom field of a given client.
* `getCustomFields` - Returns custom fields of a given person.
* `getCustomFields1` - Returns custom fields of a given client.
* `getIndustries` - Returns industries of a given client.
* `updateAddress` - Updates address of a given client.
* `updateCategories` - Updates categories of a given client.
* `updateContact` - Updates contact of a given person.
* `updateContact1` - Updates contact of a given client.
* `updateCorrespondenceAddress` - Updates correspondence address of a given client.
* `updateCustomField` - Updates given custom field of a given client.
* `updateCustomFields` - Updates custom fields of a given person.
* `updateCustomFields1` - Updates custom fields of a given client.
* `updateIndustries` - Updates industries of a given client.
* `update1` - Updates an existing person.
* `update2` - Updates an existing client.

### currencyExchangeRates

* `createExchangeRate` - Adding currency exchange rates.
* `getByIsoCode` - Returns currency exchange rates.

### dictionaries

* `getActive` - Returns active dictionary entities for all types.
* `getActiveByType` - Returns active values from a given dictionary.
* `getAllActive` - Returns active services list
* `getAllByType` - Returns all values (both active and not active) from a given dictionary.
* `getAll1` - Returns dictionary entities for all types. Both active and not active ones.
* `getAll3` - Returns services list
* `getByTypeAndId` - Returns specific value from a given dictionary.

### files

* `uploadFile` - Uploads a temporary file (ie. for XML import). Returns token which can be used in other API calls.

### jobsClassic

* `assignFileToJobOutput`
* `assignVendor` - Assigns vendor to a job in a project.
* `changeStatus` - Changes job status if possible (400 Bad Request is returned otherwise).
* `getJobDetails` - Returns job details by jobId.
* `getJobFiles` - Returns list of input and output files of a job.
* `getJobFiles1` - Returns file metadata.
* `updateDates` - Updates dates of a given job.
* `updateInstructions` - Updates instructions for a job.

### jobsSmartV2

* `addExternalFileLink`
* `addFileLinks` - Adds file link to the project as a link delivered in the job.
* `addFiles` - Adds files to the project as delivered in the job.
* `assignVendor1` - Assigns vendor to a job in a project.
* `changeDates` - Updates dates of a given job.
* `changeStatus1` - Changes job status if possible (400 Bad Request is returned otherwise).
* `getByExternalId`
* `getDeliveredFiles` - Returns list of files delivered in the job.
* `getFileById1` - Returns details for a job.
* `getSharedReferenceFiles` - Returns list of files shared with the job as Reference Files.
* `getSharedWorkFiles` - Returns list of files shared with the job as Work Files.
* `shareAsReferenceFiles` - Shares selected files as Reference Files with a job in a project.
* `shareAsWorkFiles` - Shares selected files as Work Files with a job in a project.
* `stopSharing` - Stops sharing selected files with a job in a project.
* `updateInstructions4` - Updates instructions for a job.
* `uploadFile1` - Uploads file to the project as a file delivered in the job.

### license

* `getLicense` - Returns license content.
* `refresh` - Refreshes license content.

### macros

* `run` - Executes a macro.

### projectsClassic

* `createLanguageCombination` - Creates a new language combination for a given project without creating a task.
* `createPayable` - Adds a payable to a project.
* `createReceivable` - Adds a receivable to a project.
* `createTask` - Creates a new task for a given project.
* `create5` - Creates a new Classic Project.
* `deletePayable` - Deletes a payable.
* `deleteReceivable` - Deletes a receivable.
* `delete12` - Removes a project.
* `getAllIds6` - Returns projects' internal identifiers.
* `getById7` - Returns project details.
* `getContacts` - Returns contacts of a given project.
* `getCustomFields5` - Returns custom fields of a given project.
* `getDates1` - Returns dates of a given project.
* `getFileById` - Downloads a file.
* `getFinance` - Returns finance of a given project.
* `getInstructions` - Returns instructions of a given project.
* `updateContacts` - Updates contacts of a given project.
* `updateCustomFields3` - Updates custom fields of a given project.
* `updateDates1` - Updates dates of a given project.
* `updateInstructions1` - Updates instructions of a given project.
* `updatePayable` - Updates a payable.
* `updateReceivable` - Updates a receivable.

### projectsSmartV2

* `addExternalFileLinks`
* `addFileLinks1` - Adds file links to the project as added by PM.
* `addFiles1` - Adds files to the project as added by PM.
* `addJobToProcess` - Returns process id.
* `archive` - Prepares a ZIP archive that contains the specified files.
* `changeStatus2` - Changes project status if possible (400 Bad Request is returned otherwise).
* `createPayable2` - Adds a payable to a project.
* `createReceivable2` - Adds a receivable to a project.
* `create6` - Creates a new Smart Project.
* `deletePayable2` - Deletes a payable.
* `deleteReceivable2` - Deletes a receivable.
* `getByExternalId1` - Returns project details.
* `getById9` - Returns project details.
* `getCATToolProjectInfo` - Returns if cat tool project is created or queued.
* `getContacts2` - Returns Client Contacts information for a project.
* `getCustomFields8` - Returns a list of custom field keys and values for a project.
* `getDeliverableFiles` - Returns list of files in a project, that are ready to be delivered to client.
* `getFileById2` - Returns details of a file.
* `getFileContentById` - Downloads a file content.
* `getFiles` - Returns list of files in a project.
* `getFinance2` - Returns finance information for a project.
* `getJobs` - Returns list of jobs in a project.
* `getProcessId` - Returns process id.
* `updateClientDeadline` - Updates Client Deadline for a project.
* `updateClientNotes` - Updates Client Notes for a project.
* `updateClientReferenceNumber` - Updates Client Reference Number for a project.
* `updateContacts2` - Updates Client Contacts for a project.
* `updateCustomField2` - Updates a custom field with a specified key in a project
* `updateInternalNotes` - Updates Internal Notes for a project.
* `updateOrderedOn` - Updates Order Date for a project.
* `updatePayable2` - Updates a payable.
* `updateReceivable2` - Updates a receivable.
* `updateSourceLanguage` - Updates source language for a project.
* `updateSpecialization` - Updates specialization for a project.
* `updateTargetLanguages` - Updates target languages for a project.
* `updateVendorInstructions` - Updates instructions for all vendors performing the jobs in a project.
* `updateVolume` - Updates volume for a project.
* `uploadFile2` - Uploads file to the project as a file uploaded by PM.

### quotesClassic

* `createLanguageCombination1` - Creates a new language combination for a given quote without creating a task.
* `createPayable1` - Adds a payable.
* `createReceivable1` - Adds a receivable.
* `createTask1` - Creates a new task for a given quote.
* `deletePayable1` - Deletes a payable.
* `deleteReceivable1` - Deletes a receivable.
* `delete13` - Removes a quote.
* `getAllIds7` - Returns quotes' internal identifiers.
* `getById8` - Returns quote details.
* `getCustomFields6` - Returns custom fields of a given quote.
* `getDates2` - Returns dates of a given quote.
* `getFinance1` - Returns finance of a given quote.
* `getInstructions1` - Returns instructions of a given quote.
* `send1` - Sends a quote for customer confirmation.
* `start` - Starts a quote.
* `updateCustomFields4` - Updates custom fields of a given quote.
* `updateInstructions2` - Updates instructions of a given quote.
* `updatePayable1` - Updates a payable.
* `updateReceivable1` - Updates a receivable.

### quotesSmartV2

* `addFiles2` - Adds files to the quote as added by PM.
* `archive1` - Prepares a ZIP archive that contains the specified files.
* `changeStatus3` - Changes quote status if possible (400 Bad Request is returned otherwise).
* `createPayable3` - Adds a payable to a quote.
* `createReceivable3` - Adds a receivable to a quote.
* `create7` - Creates a new Smart Quote.
* `deletePayable3` - Deletes a payable.
* `deleteReceivable3` - Deletes a receivable.
* `getById10` - Returns quote details.
* `getContacts3` - Returns Client Contacts information for a quote.
* `getCustomFields9` - Returns a list of custom field keys and values for a project.
* `getFileById3` - Returns details of a file.
* `getFileContentById1` - Downloads a file content.
* `getFiles1` - Returns list of files in a quote.
* `getFinance3` - Returns finance information for a quote.
* `getJobs1` - Returns list of jobs in a quote.
* `updateBusinessDays` - Updates Business Days for a quote.
* `updateClientNotes1` - Updates Client Notes for a quote.
* `updateClientReferenceNumber1` - Updates Client Reference Number for a quote.
* `updateContacts3` - Updates Client Contacts for a quote.
* `updateCustomField3` - Updates a custom field with a specified key in a quote.
* `updateExpectedDeliveryDate` - Updates Expected Delivery Date for a quote.
* `updateInternalNotes1` - Updates Internal Notes for a quote.
* `updatePayable3` - Updates a payable.
* `updateQuoteExpiry` - Updates Quote Expiry Date for a quote.
* `updateReceivable3` - Updates a receivable.
* `updateSourceLanguage1` - Updates source language for a quote.
* `updateSpecialization1` - Updates specialization for a quote.
* `updateTargetLanguages1` - Updates target languages for a quote.
* `updateVendorInstructions1` - Updates instructions for all vendors performing the jobs in a quote.
* `updateVolume1` - Updates volume for a quote.
* `uploadFile3` - Uploads file to the quote as a file uploaded by PM.

### reports

* `delete11` - Removes a report.
* `duplicate1` - Duplicates a report.
* `exportToXML` - Exports reports definition to XML.
* `generateCSV` - Generates CSV content for a report.
* `generatePrinterFriendly` - Generates printer friendly content for a report.
* `importFromXML` - Imports reports definition from XML.
* `setPreferred` - Marks report as preferred or not.

### subscription

* `areHooksSupported` - This method can be used to determine if hooks are supported.
* `getAll4` - Returns all subscriptions
* `subscribe` - Subscribe to event
* `unsubscribe` - Unsubscribe from event

### tasksClassic

* `addFile` - Adds files to a given task.
* `delete14` - Removes a task.
* `getContacts1` - Returns contacts of a given task.
* `getCustomFields7` - Returns custom fields of a given task.
* `getDates3` - Returns dates of a given task.
* `getInstructions2` - Returns instructions of a given task.
* `getProgress` - Returns progress of a given task.
* `getTaskFiles` - Returns lists of files of a given task.
* `start1` - Starts a task.
* `updateClientTaskPONumber` - Updates Client Task PO Number of a given task.
* `updateContacts1` - Updates contacts of a given task.
* `updateCustomFields5` - Updates custom fields of a given task.
* `updateDates2` - Updates dates of a given task.
* `updateInstructions3` - Updates instructions of a given task.
* `updateName` - Updates name of a given task.

### users

* `changePassword` - Sets user's password to a new value.
* `getAllNamesWithIds1` - Returns list of simple users representations
* `getById6` - Returns user details.
* `getCustomField1` - Returns custom field of a given user.
* `getCustomFields4` - Returns custom fields of a given user.
* `getMe` - Returns currently signed in user details.
* `getTimeZone` - Returns time zone preferred by user currently signed in.
* `updateCustomField1` - Updates given custom field of a given user.
* `updateCustomFields2` - Updates custom fields of a given user.
* `update3` - Updates an existing user.

### vendorInvoices

* `createPayment1` - Creates a new payment on the vendor account and assigns the payment to the invoice.
* `create4` - Creates a new invoice.
* `delete6` - Removes a provider invoice.
* `delete7` - Removes a provider payment.
* `getAllIds3` - Returns vendor invoices' internal identifiers.
* `getAll2` - Lists all vendor invoices in all statuses (including not ready and drafts) that have been updated since a specific date.
* `getById3` - Returns provider invoice details.
* `getDocument1` - Generates provider invoice document (PDF).
* `getPayments1` - Returns all payments for the vendor invoice.
* `send` - Sends a provider invoice.
* `setStatus` - Changes invoice status to given status.

### vendors

* `delete10` - Removes a provider.
* `delete8` - Removes a person.
* `delete9` - Removes a provider price list.
* `getAddress1` - Returns address of a given provider.
* `getAllIds4` - Returns persons' internal identifiers.
* `getAllIds5` - Returns providers' internal identifiers.
* `getById4` - Returns person details.
* `getById5` - Returns provider details.
* `getCompetencies` - Returns competencies of a given provider.
* `getContact2` - Returns contact of a given person.
* `getContact3` - Returns contact of a given provider.
* `getCorrespondenceAddress1` - Returns correspondence address of a given provider.
* `getCustomFields2` - Returns custom fields of a given person.
* `getCustomFields3` - Returns custom fields of a given provider.
* `sendInvitations` - Sends invitation to Vendor Portal.
* `sendInvitations1` - Sends invitations to Vendor Portal.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

