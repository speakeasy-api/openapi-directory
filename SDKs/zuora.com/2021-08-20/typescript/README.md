# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "openapi";
import { DeleteAccountingCodeRequest, DeleteAccountingCodeResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DeleteAccountingCodeRequest = {
  pathParams: {
    acId: "sit",
  },
  headers: {
    zuoraEntityIds: "voluptas",
    zuoraTrackId: "culpa",
  },
};

sdk.accountingCodes.deleteAccountingCode(req).then((res: DeleteAccountingCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Accounting Codes

* `deleteAccountingCode` - Delete an accounting code
* `getAccountingCode` - Retrieve an accounting code
* `getAllAccountingCodes` - List all accounting codes
* `postAccountingCode` - Create an accounting code
* `putAccountingCode` - Update an accounting code
* `putActivateAccountingCode` - Activate an accounting code
* `putDeactivateAccountingCode` - Deactivate an accounting code

### Accounting Periods

* `deleteAccountingPeriod` - Delete an accounting period
* `getAccountingPeriod` - Retrieve an accounting period
* `getAllAccountingPeriods` - List all accounting periods
* `postAccountingPeriod` - Create an accounting period
* `putCloseAccountingPeriod` - Close an accounting period
* `putPendingCloseAccountingPeriod` - Set an accounting period to pending close
* `putReopenAccountingPeriod` - Reopen an accounting period
* `putRunTrialBalance` - Run trial balance
* `putUpdateAccountingPeriod` - Update an accounting period

### Accounts

* `getAccount` - Retrieve an account
* `getAccountSummary` - Retrieve an account summary
* `objectDeleteAccount` - CRUD: Delete an account
* `objectGetAccount` - CRUD: Retrieve an account
* `objectPostAccount` - CRUD: Create an account
* `objectPutAccount` - CRUD: Update an account
* `postAccount` - Create an account
* `putAccount` - Update an account

### Actions

* `actionPosTamend` - Amend
* `actionPosTcreate` - Create
* `actionPosTdelete` - Delete
* `actionPosTexecute` - Execute
* `actionPosTgenerate` - Generate
* `actionPosTquery` - Query
* `actionPosTqueryMore` - QueryMore
* `actionPosTsubscribe` - Subscribe
* `actionPosTupdate` - Update

### Amendments

* `getAmendmentsByKey` - Retrieve an amendment
* `getAmendmentsBySubscriptionId` - List all amendments of a subscription
* `objectDeleteAmendment` - CRUD: Delete an amendment
* `objectGetAmendment` - CRUD: Retrieve an amendment
* `objectPutAmendment` - CRUD: Update an amendment

### Attachments

* `deleteAttachments` - Delete an attachment
* `getAttachments` - Retrieve an attachment
* `getAttachmentsList` - List attachments by object type and key
* `postAttachments` - Create an attachment
* `putAttachments` - Update an attachment

### Bill Run

* `objectDeleteBillRun` - CRUD: Delete a bill run
* `objectGetBillRun` - CRUD: Retrieve a bill run
* `objectPostBillRun` - CRUD: Create a bill run
* `objectPutBillRun` - CRUD: Post or cancel a bill run
* `postEmailBillingDocumentsfromBillRun` - Email billing documents generated from a bill run

### Billing Documents

* `getBillingDocumentFilesDeletionJob` - Retrieve a job of hard deleting billing document files
* `getBillingDocuments` - List billing documents for an account
* `postBillingDocumentFilesDeletionJob` - Create a job to hard delete billing document files
* `postGenerateBillingDocuments` - Generate billing documents by account ID

### Billing Preview Run

* `getBillingPreviewRun` - Retrieve a billing preview run
* `postBillingPreviewRun` - Create a billing preview run

### Catalog

* `getCatalog` - List all products
* `getProduct` - Retrieve a product
* `postCatalog` - Multi-entity: Share a product with an entity

### Charge Metrics

* `getChargeMetrics` - List charge metrics by time range
* `getChargeMetricsDiscountAllocationDetails` - List discount allocation details by time range

### Charge Revenue Summaries

* `getCrsByCrsNumber` - List all details of a charge revenue summary
* `getCrsByChargeId` - Retrieve a charge revenue summary by charge ID

### Communication Profiles

* `objectGetCommunicationProfile` - CRUD: Retrieve a communication profile

### Connections

* `postConnections` - Establish a connection to Zuora REST API

### Contacts

* `objectDeleteContact` - CRUD: Delete a contact
* `objectGetContact` - CRUD: Retrieve a contact
* `objectPostContact` - CRUD: Create a contact
* `objectPutContact` - CRUD: Update a contact
* `putScrubContact` - Scrub a contact

### Credit Balance Adjustments

* `objectGetCreditBalanceAdjustment` - CRUD: Retrieve a credit balance adjustment
* `objectPostCreditBalanceAdjustment` - CRUD: Create a credit balance adjustment
* `objectPutCreditBalanceAdjustment` - CRUD: Update a credit balance adjustment

### Credit Memos

* `deleteCreditMemo` - Delete a credit memo
* `getCreditMemo` - Retrieve a credit memo
* `getCreditMemoItem` - Retrieve a credit memo item
* `getCreditMemoItemPart` - Retrieve a credit memo part item
* `getCreditMemoItemParts` - List all credit memo part items
* `getCreditMemoItems` - List credit memo items
* `getCreditMemoPart` - Retrieve a credit memo part
* `getCreditMemoParts` - List all parts of a credit memo
* `getCreditMemos` - List credit memos
* `getTaxationItemsOfCreditMemoItem` - List all taxation items of a credit memo item
* `postCmTaxationItems` - Create taxation items for a credit memo
* `postCreditMemoFromPrpc` - Create a credit memo from a charge
* `postCreditMemoPdf` - Generate a credit memo PDF file
* `postEmailCreditMemo` - Email a credit memo
* `postRefundCreditMemo` - Refund a credit memo
* `postUploadFileForCreditMemo` - Upload a file for a credit memo
* `putApplyCreditMemo` - Apply a credit memo
* `putCancelCreditMemo` - Cancel a credit memo
* `putPostCreditMemo` - Post a credit memo
* `putUnapplyCreditMemo` - Unapply a credit memo
* `putUnpostCreditMemo` - Unpost a credit memo
* `putUpdateCreditMemo` - Update a credit memo

### Custom Exchange Rates

* `getCustomExchangeRates` - List custom exchange rates by currency

### Custom Object Definitions

* `deleteCustomObjectDefinitionByType` - Delete a custom object definition
* `getAllCustomObjectDefinitionsInNamespace` - List custom object definitions
* `getCustomObjectDefinitionByType` - Retrieve a custom object definition
* `postCustomObjectDefinitions` - Create custom object definitions
* `postUpdateCustomObjectDefinition` - Update a custom object definition

### Custom Object Jobs

* `getAllCustomObjectBulkJobs` - List all custom object bulk jobs
* `getCustomObjectBulkJob` - Retrieve a custom object bulk job
* `getCustomObjectBulkJobErrors` - List all errors for a custom object bulk job
* `postCustomObjectBulkJob` - Submit a custom object bulk job
* `postUploadFileForCustomObjectBulkJob` - Upload a file for a custom object bulk job

### Custom Object Records

* `deleteCustomObjectRecordById` - Delete a custom object record
* `getAllRecordsForCustomObjectType` - List records for a custom object
* `getCustomObjectRecordById` - Retrieve a custom object record
* `postCustomObjectRecords` - Create custom object records
* `postCustomObjectRecordsBatchUpdateOrDelete` - Update or delete custom object records
* `putCustomObjectRecord` - Update a custom object record
* `patchPartialUpdateCustomObjectRecord` - Partially update a custom object record

### Data Queries

* `deleteDataQueryJob` - Cancel a data query job
* `getDataQueryJob` - Retrieve a data query job
* `getDataQueryJobs` - List data query jobs
* `postDataQueryJob` - Submit a data query

### Debit Memos

* `deleteDebitMemo` - Delete a debit memo
* `getDebitMemo` - Retrieve a debit memo
* `getDebitMemoApplicationParts` - List all application parts of a debit memo
* `getDebitMemoItem` - Retrieve a debit memo item
* `getDebitMemoItems` - List debit memo items
* `getDebitMemos` - List debit memos
* `getTaxationItemsOfDebitMemoItem` - List all taxation items of a debit memo item
* `postDmTaxationItems` - Create taxation items for a debit memo
* `postDebitMemoCollect` - Collect a posted debit memo
* `postDebitMemoFromPrpc` - Create a debit memo from a charge
* `postDebitMemoPdf` - Generate a debit memo PDF file
* `postEmailDebitMemo` - Email a debit memo
* `postUploadFileForDebitMemo` - Upload a file for a debit memo
* `putBatchUpdateDebitMemos` - Update debit memos
* `putCancelDebitMemo` - Cancel a debit memo
* `putDebitMemo` - Update a debit memo
* `putPostDebitMemo` - Post a debit memo
* `putUnpostDebitMemo` - Unpost a debit memo

### Describe

* `getDescribe` - Describe an object

### Document Properties

* `deleteDocumentProperties` - Delete document properties
* `getDocumentProperies` - List all properties of a billing document
* `postDocumentProperties` - Create document properties
* `putDocumentProperties` - Update document properties

### Entities

* `deleteEntities` - Multi-entity: Delete an entity
* `getEntities` - Multi-entity: List entities
* `getEntityById` - Multi-entity: Retrieve an entity
* `postEntities` - Multi-entity: Create an entity
* `putEntities` - Multi-entity: Update an entity
* `putProvisionEntity` - Multi-entity: Provision an entity

### Entity Connections

* `getEntityConnections` - Multi-entity: List connections
* `postEntityConnections` - Multi-entity: Initiate a connection request
* `putEntityConnectionsAccept` - Multi-entity: Accept a connection request
* `putEntityConnectionsDeny` - Multi-entity: Deny a connection request
* `putEntityConnectionsDisconnect` - Multi-entity: Disconnect a connection

### Event Triggers

* `deleteEventTrigger` - Delete an event trigger
* `getEventTrigger` - Retrieve an event trigger
* `getEventTriggers` - List event triggers
* `postEventTrigger` - Create an event trigger
* `putEventTrigger` - Update an event trigger

### Exports

* `objectGetExport` - CRUD: Retrieve an export
* `objectPostExport` - CRUD: Create an export

### Features

* `objectDeleteFeature` - CRUD: Delete a feature
* `objectGetFeature` - CRUD: Retrieve a feature
* `objectPostFeature` - CRUD: Create a feature
* `objectPutFeature` - CRUD: Update a feature

### Files

* `getFiles` - Retrieve a file

### HMAC Signatures

* `postHmacSignatures` - Generate an HMAC signature

### Hosted Pages

* `getHostedPages` - List hosted pages

### Imports

* `objectGetImport` - CRUD: Retrieve an import
* `objectPostImport` - CRUD: Create an import

### Invoice Adjustments

* `objectDeleteInvoiceAdjustment` - CRUD: Delete an invoice adjustment
* `objectGetInvoiceAdjustment` - CRUD: Retrieve an invoice adjustment
* `objectPostInvoiceAdjustment` - CRUD: Create an invoice adjustment
* `objectPutInvoiceAdjustment` - CRUD: Update an invoice adjustment

### Invoice Item Adjustments

* `objectDeleteInvoiceItemAdjustment` - CRUD: Delete an invoice item adjustment
* `objectGetInvoiceItemAdjustment` - CRUD: Retrieve an invoice item adjustment

### Invoice Items

* `objectGetInvoiceItem` - CRUD: Retrieve an invoice item

### Invoice Payments

* `objectGetInvoicePayment` - CRUD: Retrieve an invoice payment
* `objectPostInvoicePayment` - CRUD: Create an invoice payment
* `objectPutInvoicePayment` - CRUD: Update an invoice payment

### Invoice Split Items

* `objectGetInvoiceSplitItem` - CRUD: Retrieve an invoice split item

### Invoice Splits

* `objectGetInvoiceSplit` - CRUD: Retrieve an invoice split

### Invoices

* `getInvoiceApplicationParts` - List all application parts of an invoice
* `getInvoiceFiles` - List all files of an invoice
* `getInvoiceItems` - List all items of an invoice
* `getTaxationItemsOfInvoiceItem` - List all taxation items of an invoice item
* `objectDeleteInvoice` - CRUD: Delete an invoice
* `objectGetInvoice` - CRUD: Retrieve an invoice
* `objectPutInvoice` - CRUD: Update an invoice
* `postCreditMemoFromInvoice` - Create a credit memo from an invoice
* `postDebitMemoFromInvoice` - Create a debit memo from an invoice
* `postEmailInvoice` - Email an invoice
* `postStandaloneInvoice` - Create a standalone invoice
* `postUploadFileForInvoice` - Upload a file for an invoice
* `putBatchUpdateInvoices` - Update invoices
* `putReverseInvoice` - Reverse an invoice
* `putUpdateInvoice` - Update an invoice
* `putWriteOffInvoice` - Write off an invoice

### Journal Runs

* `deleteJournalRun` - Delete a journal run
* `getJournalRun` - Retrieve a journal run
* `postJournalRun` - Create a journal run
* `putJournalRun` - Cancel a journal run

### Mass Updater

* `getMassUpdater` - List all results of a mass action
* `postMassUpdater` - Perform a mass action
* `putMassUpdater` - Stop a mass action

### Notifications

* `deleteDeleteEmailTemplate` - Delete an email template
* `deleteDeleteNotificationDefinition` - Delete a notification definition
* `deleteDeleteNotificationHistoryForAccount` - Delete notification histories for an account
* `getCalloutHistory` - List callout notification histories
* `getEmailHistory` - List email notification histories
* `getGetEmailTemplate` - Retrieve an email template
* `getGetNotificationDefinition` - Retrieve a notification definition
* `getGetNotificationHistoryDeletionTask` - Retrieve a notification history deletion task
* `getQueryEmailTemplates` - List email templates
* `getQueryNotificationDefinitions` - List notification definitions
* `postCreateEmailTemplate` - Create an email template
* `postCreateNotificationDefinition` - Create a notification definition
* `putUpdateEmailTemplate` - Update an email template
* `putUpdateNotificationDefinition` - Update a notification definition

### OAuth

* `createToken` - Create an OAuth token

### Operations

* `postBillingPreview` - Generate a billing preview
* `postTransactionInvoicePayment` - Invoice and collect

### Order Line Items

* `getOrderLineItem` - Retrieve an order line item
* `putOrderLineItem` - Update an order line item
* `postOrderLineItems` - Update order line items

### Orders

* `deleteOrder` - Delete an order
* `getAllOrders` - List orders
* `getJobStatusAndResponse` - Retrieve the status and response of a job
* `getOrder` - Retrieve an order
* `getOrderMetricsforEvergreenSubscription` - List order metrics for an evergreen subscription
* `getOrdersByInvoiceOwner` - List orders of an invoice owner
* `getOrdersBySubscriptionNumber` - List orders by subscription number
* `getOrdersBySubscriptionOwner` - List orders of a subscription owner
* `getSubscriptionTermInfo` - List subscription terms
* `postCreateOrderAsynchronously` - Create an order asynchronously
* `postOrder` - Create an order
* `postPreviewOrder` - Preview an order
* `postPreviewOrderAsynchronously` - Preview an order asynchronously
* `putOrderTriggerDates` - Update order action trigger dates
* `putUpdateOrderCustomFields` - Update order custom fields
* `putUpdateSubscriptionCustomFields` - Update subscription custom fields

### Payment Gateway Reconciliation

* `postReconcileRefund` - Reconcile a refund
* `postRejectPayment` - Reject a payment
* `postReversePayment` - Reverse a payment
* `postSettlePayment` - Settle a payment

### Payment Gateways

* `getPaymentgateways` - List all payment gateways

### Payment Method Snapshots

* `objectGetPaymentMethodSnapshot` - CRUD: Retrieve a payment method snapshot

### Payment Method Transaction Logs

* `objectGetPaymentMethodTransactionLog` - CRUD: Retrieve a payment method transaction log

### Payment Methods

* `deletePaymentMethods` - Delete a payment method
* `getPaymentMethod` - Retrieve a payment method
* `getPaymentMethodsCreditCard` - List all credit card payment methods of an account
* `getStoredCredentialProfiles` - List stored credential profiles of a payment method
* `objectDeletePaymentMethod` - CRUD: Delete a payment method
* `objectGetPaymentMethod` - CRUD: Retrieve a payment method
* `objectPostPaymentMethod` - CRUD: Create a payment method
* `objectPutPaymentMethod` - CRUD: Update a payment method
* `postCancelAuthorization` - Cancel authorization
* `postCancelStoredCredentialProfile` - Cancel a stored credential profile
* `postCreateAuthorization` - Create authorization
* `postCreateStoredCredentialProfile` - Create a stored credential profile
* `postExpireStoredCredentialProfile` - Expire a stored credential profile
* `postPaymentMethods` - Create a payment method
* `postPaymentMethodsCreditCard` - Create a credit card payment method
* `postPaymentMethodsDecryption` - Create an Apple Pay payment method
* `putPaymentMethod` - Update a payment method
* `putPaymentMethodsCreditCard` - Update a credit card payment method
* `putScrubPaymentMethods` - Scrub a payment method
* `putVerifyPaymentMethods` - Verify a payment method

### Payment Runs

* `deletePaymentRun` - Delete a payment run
* `getPaymentRun` - Retrieve a payment run
* `getPaymentRunData` - Retrieve payment run data
* `getPaymentRunSummary` - Retrieve a payment run summary
* `getPaymentRuns` - List payment runs
* `postPaymentRun` - Create a payment run
* `putPaymentRun` - Update a payment run

### Payment Transaction Logs

* `objectGetPaymentTransactionLog` - CRUD: Retrieve a payment transaction log

### Payments

* `deletePayment` - Delete a payment
* `getPayment` - Retrieve a payment
* `getPaymentItemPart` - Retrieve a payment part item
* `getPaymentItemParts` - List all payment part items
* `getPaymentPart` - Retrieve a payment part
* `getPaymentParts` - List all parts of a payment
* `getRetrieveAllPayments` - List payments
* `objectDeletePayment` - CRUD: Delete a payment
* `objectGetPayment` - CRUD: Retrieve a payment
* `objectPostPayment` - CRUD: Create a payment
* `objectPutPayment` - CRUD: Update a payment
* `postCreatePayment` - Create a payment
* `postRefundPayment` - Refund a payment
* `putApplyPayment` - Apply a payment
* `putCancelPayment` - Cancel a payment
* `putTransferPayment` - Transfer a payment
* `putUnapplyPayment` - Unapply a payment
* `putUpdatePayment` - Update a payment

### Product Features

* `objectDeleteProductFeature` - CRUD: Delete a product feature
* `objectGetProductFeature` - CRUD: Retrieve a product feature

### Product Rate Plan Charge Tiers

* `objectGetProductRatePlanChargeTier` - CRUD: Retrieve a product rate plan charge tier
* `objectPutProductRatePlanChargeTier` - CRUD: Update a product rate plan charge tier

### Product Rate Plan Charges

* `objectDeleteProductRatePlanCharge` - CRUD: Delete a product rate plan charge
* `objectGetProductRatePlanCharge` - CRUD: Retrieve a product rate plan charge
* `objectPostProductRatePlanCharge` - CRUD: Create a product rate plan charge
* `objectPutProductRatePlanCharge` - CRUD: Update a product rate plan charge

### Product Rate Plans

* `getProductRatePlans` - List all product rate plans of a product
* `objectDeleteProductRatePlan` - CRUD: Delete a product rate plan
* `objectGetProductRatePlan` - CRUD: Retrieve a product rate plan
* `objectPostProductRatePlan` - CRUD: Create a product rate plan
* `objectPutProductRatePlan` - CRUD: Update a product rate plan

### Products

* `objectDeleteProduct` - CRUD: Delete a product
* `objectGetProduct` - CRUD: Retrieve a product
* `objectPostProduct` - CRUD: Create a product
* `objectPutProduct` - CRUD: Update a product

### Quotes Document

* `postQuotesDocument` - Generate a quote document

### RSA Signatures

* `postDecryptRsaSignatures` - Decrypt an RSA signature
* `postRsaSignatures` - Generate an RSA signature

### Ramps

* `getRampByRampNumber` - Retrieve a ramp
* `getRampMetricsByOrderNumber` - List ramp metrics by order number
* `getRampMetricsByRampNumber` - List all ramp metrics of a ramp
* `getRampMetricsBySubscriptionKey` - List ramp metrics by subscription key
* `getRampsBySubscriptionKey` - Retrieve a ramp by subscription key

### Rate Plan Charge Tiers

* `objectGetRatePlanChargeTier` - CRUD: Retrieve a rate plan charge tier

### Rate Plan Charges

* `objectGetRatePlanCharge` - CRUD: Retrieve a rate plan charge
* `objectPutRatePlanCharge` - CRUD: Update a rate plan charge

### Rate Plans

* `objectGetRatePlan` - CRUD: Retrieve a rate plan

### Refund Invoice Payments

* `objectGetRefundInvoicePayment` - CRUD: Retrieve a refund invoice payment

### Refund Transaction Logs

* `objectGetRefundTransactionLog` - CRUD: Retrieve a refund transaction log

### Refunds

* `deleteRefund` - Delete a refund
* `getRefund` - Retrieve a refund
* `getRefundItemPart` - Retrieve a refund part item
* `getRefundItemParts` - List all refund part items
* `getRefundPart` - Retrieve a refund part
* `getRefundParts` - List all parts of a refund
* `getRefunds` - List refunds
* `objectDeleteRefund` - CRUD: Delete a refund
* `objectGetRefund` - CRUD: Retrieve a refund
* `objectPostRefund` - CRUD: Create a refund
* `objectPutRefund` - CRUD: Update a refund
* `putCancelRefund` - Cancel a refund
* `putUpdateRefund` - Update a refund

### Revenue Events

* `getRevenueEventDetails` - Retrieve a revenue event
* `getRevenueEventForRevenueSchedule` - List all revenue events of a revenue schedule

### Revenue Items

* `getRevenueItemsByChargeRevenueEventNumber` - List revenue items by revenue event number
* `getRevenueItemsByChargeRevenueSummaryNumber` - List revenue items by charge revenue summary number
* `getRevenueItemsByRevenueSchedule` - List all revenue items of a revenue schedule
* `putCustomFieldsonRevenueItemsByRevenueEvent` - Update custom fields on revenue items by revenue event number
* `putCustomFieldsonRevenueItemsByRevenueSchedule` - Update custom fields on revenue items by revenue schedule number

### Revenue Rules

* `getRevenueAutomationStartDate` - Retrieve a revenue automation start date
* `getRevenueRecRulebyProductRatePlanCharge` - Retrieve a revenue recognition rule by product rate plan charge ID
* `getRevenueRecRules` - Retrieve a revenue recognition rule by subscription charge ID

### Revenue Schedules

* `deleteRs` - Delete a revenue schedule
* `getRs` - List all details of a revenue schedule
* `getRSbyCreditMemoItem` - Retrieve a revenue schedule by credit memo item ID

* `getRSbyDebitMemoItem` - Retrieve a revenue schedule by debit memo item ID

* `getRSbyInvoiceItem` - Retrieve a revenue schedule by invoice item ID
* `getRSbyInvoiceItemAdjustment` - Retrieve a revenue schedule by invoice item adjustment key
* `getRSbyProductChargeAndBillingAccount` - List revenue schedules of a product charge by charge ID and account key

* `getRSforSubscCharge` - List revenue schedules by subscription charge key
* `postRSforCreditMemoItemDistributeByDateRange` - Create a revenue schedule for a credit memo item (distribute by date range)

* `postRSforCreditMemoItemManualDistribution` - Create a revenue schedule for a credit memo item (manual distribution)

* `postRSforDebitMemoItemDistributeByDateRange` - Create a revenue schedule for a debit memo item (distribute by date range)

* `postRSforDebitMemoItemManualDistribution` - Create a revenue schedule for a debit memo item (distribute by date range)

* `postRSforInvoiceItemAdjustmentDistributeByDateRange` - Create a revenue schedule for an invoice item adjustment (distribute by date range)
* `postRSforInvoiceItemAdjustmentManualDistribution` - Create a revenue schedule for an invoice item adjustment (manual distribution)
* `postRSforInvoiceItemDistributeByDateRange` - Create a revenue schedule for an invoice item (distribute by date range)
* `postRSforInvoiceItemManualDistribution` - Create a revenue schedule for an invoice item (manual distribution)
* `postRSforSubscCharge` - Create a revenue schedule by subscription charge key
* `putRsBasicInfo` - Update a revenue schedule
* `putRevenueAcrossAp` - Distribute revenue across accounting periods
* `putRevenueByRecognitionStartandEndDates` - Distribute revenue in a recognition period
* `putRevenueSpecificDate` - Distribute revenue on a specific date

### Sequence Sets

* `deleteSequenceSet` - Delete a sequence set
* `getSequenceSet` - Retrieve a sequence set
* `getSequenceSets` - List sequence sets
* `postSequenceSets` - Create sequence sets
* `putSequenceSet` - Update a sequence set

### Settings

* `getListAllSettings` - List all settings
* `postProcessSettingsBatchRequest` - Submit settings requests

### Subscription Product Features

* `objectGetSubscriptionProductFeature` - CRUD: Retrieve a subscription product feature

### Subscriptions

* `getSubscriptionsByAccount` - List subscriptions by account key
* `getSubscriptionsByKey` - Retrieve a subscription by key
* `getSubscriptionsByKeyAndVersion` - Retrieve a subscription by key and version
* `objectDeleteSubscription` - CRUD: Delete a subscription
* `objectGetSubscription` - CRUD: Retrieve a subscription
* `objectPutSubscription` - CRUD: Update a subscription
* `postPreviewSubscription` - Preview a subscription
* `postSubscription` - Create a subscription
* `putCancelSubscription` - Cancel a subscription
* `putRenewSubscription` - Renew a subscription
* `putResumeSubscription` - Resume a subscription
* `putSubscription` - Update a subscription
* `putSuspendSubscription` - Suspend a subscription
* `putUpdateSubscriptionCustomFieldsOfASpecifiedVersion` - Update subscription custom fields of a subscription version

### Summary Journal Entries

* `deleteSummaryJournalEntry` - Delete a summary journal entry
* `getAllSummaryJournalEntries` - List all summary journal entries in a journal run
* `getSummaryJournalEntry` - Retrieve a summary journal entry
* `postSummaryJournalEntry` - Create a summary journal entry
* `putBasicSummaryJournalEntry` - Update a summary journal entry
* `putSummaryJournalEntry` - Cancel a summary journal entry

### Taxation Items

* `deleteTaxationItem` - Delete a taxation item
* `getTaxationItem` - Retrieve a taxation item

* `objectDeleteTaxationItem` - CRUD: Delete a taxation item
* `objectGetTaxationItem` - CRUD: Retrieve a taxation item
* `objectPostTaxationItem` - CRUD: Create a taxation item
* `objectPutTaxationItem` - CRUD: Update a taxation item
* `putTaxationItem` - Update a taxation item

### Transactions

* `getTransactionInvoice` - List all invoices for an account
* `getTransactionPayment` - List all payments for an account

### Unit Of Measure

* `objectDeleteUnitOfMeasure` - CRUD: Delete a unit of measure
* `objectGetUnitOfMeasure` - CRUD: Retrieve a unit of measure
* `objectPostUnitOfMeasure` - CRUD: Create a unit of measure
* `objectPutUnitOfMeasure` - CRUD: Update a unit of measure

### Usage

* `getUsage` - Retrieve a usage record
* `objectDeleteUsage` - CRUD: Delete a usage record
* `objectGetUsage` - CRUD: Retrieve a usage record
* `objectPostUsage` - CRUD: Create a usage record
* `objectPutUsage` - CRUD: Update a usage record
* `postUsage` - Upload a usage file

### Users

* `getEntitiesUserAccessible` - Multi-entity: List all entities that a user can access
* `putAcceptUserAccess` - Multi-entity: Accept user access
* `putDenyUserAccess` - Multi-entity: Deny user access
* `putSendUserAccessRequests` - Multi-entity: Send user access requests

### Workflows

* `deleteWorkflow` - Delete a workflow
* `getWorkflow` - Retrieve a workflow
* `getWorkflowExport` - Export a workflow
* `getWorkflows` - List workflows
* `getWorkflowsTask` - Retrieve a workflow task
* `getWorkflowsTasks` - List workflow tasks
* `getWorkflowsUsages` - Retrieve workflow task usage
* `patchUpdateWorkflow` - Update a workflow definition
* `postRunWorkflow` - Run a workflow
* `postWorkflowImport` - Import a workflow
* `postWorkflowsTaskRerun` - Rerun a workflow task
* `putWorkflowsTasksUpdate` - Update workflow tasks

### Zuora Revenue Integration

* `putRevProAccountingCodes` - Update a Zuora Revenue accounting code

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
