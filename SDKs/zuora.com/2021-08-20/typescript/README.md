# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/zuora.com/2021-08-20/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/zuora.com/2021-08-20/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  DELETEAccountingCodeRequest,
  DELETEAccountingCodeResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: DELETEAccountingCodeRequest = {
  zuoraEntityIds: "corrupti",
  zuoraTrackId: "provident",
  acId: "distinctio",
};

sdk.accountingCodes.deleteAccountingCode(req).then((res: DELETEAccountingCodeResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accountingCodes

* `deleteAccountingCode` - Delete an accounting code
* `getAccountingCode` - Retrieve an accounting code
* `getAllAccountingCodes` - List all accounting codes
* `postAccountingCode` - Create an accounting code
* `putAccountingCode` - Update an accounting code
* `putActivateAccountingCode` - Activate an accounting code
* `putDeactivateAccountingCode` - Deactivate an accounting code

### accountingPeriods

* `deleteAccountingPeriod` - Delete an accounting period
* `getAccountingPeriod` - Retrieve an accounting period
* `getAllAccountingPeriods` - List all accounting periods
* `postAccountingPeriod` - Create an accounting period
* `putCloseAccountingPeriod` - Close an accounting period
* `putPendingCloseAccountingPeriod` - Set an accounting period to pending close
* `putReopenAccountingPeriod` - Reopen an accounting period
* `putRunTrialBalance` - Run trial balance
* `putUpdateAccountingPeriod` - Update an accounting period

### accounts

* `getAccount` - Retrieve an account
* `getAccountSummary` - Retrieve an account summary
* `objectDELETEAccount` - CRUD: Delete an account
* `objectGETAccount` - CRUD: Retrieve an account
* `objectPOSTAccount` - CRUD: Create an account
* `objectPUTAccount` - CRUD: Update an account
* `postAccount` - Create an account
* `putAccount` - Update an account

### actions

* `actionPOSTamend` - Amend
* `actionPOSTcreate` - Create
* `actionPOSTdelete` - Delete
* `actionPOSTexecute` - Execute
* `actionPOSTgenerate` - Generate
* `actionPOSTquery` - Query
* `actionPOSTqueryMore` - QueryMore
* `actionPOSTsubscribe` - Subscribe
* `actionPOSTupdate` - Update

### amendments

* `getAmendmentsByKey` - Retrieve an amendment
* `getAmendmentsBySubscriptionID` - List all amendments of a subscription
* `objectDELETEAmendment` - CRUD: Delete an amendment
* `objectGETAmendment` - CRUD: Retrieve an amendment
* `objectPUTAmendment` - CRUD: Update an amendment

### attachments

* `deleteAttachments` - Delete an attachment
* `getAttachments` - Retrieve an attachment
* `getAttachmentsList` - List attachments by object type and key
* `postAttachments` - Create an attachment
* `putAttachments` - Update an attachment

### billRun

* `objectDELETEBillRun` - CRUD: Delete a bill run
* `objectGETBillRun` - CRUD: Retrieve a bill run
* `objectPOSTBillRun` - CRUD: Create a bill run
* `objectPUTBillRun` - CRUD: Post or cancel a bill run
* `postEmailBillingDocumentsfromBillRun` - Email billing documents generated from a bill run

### billingDocuments

* `getBillingDocumentFilesDeletionJob` - Retrieve a job of hard deleting billing document files
* `getBillingDocuments` - List billing documents for an account
* `postBillingDocumentFilesDeletionJob` - Create a job to hard delete billing document files
* `postGenerateBillingDocuments` - Generate billing documents by account ID

### billingPreviewRun

* `getBillingPreviewRun` - Retrieve a billing preview run
* `postBillingPreviewRun` - Create a billing preview run

### catalog

* `getCatalog` - List all products
* `getProduct` - Retrieve a product
* `postCatalog` - Multi-entity: Share a product with an entity

### chargeMetrics

* `getChargeMetrics` - List charge metrics by time range
* `getChargeMetricsDiscountAllocationDetails` - List discount allocation details by time range

### chargeRevenueSummaries

* `getCRSByCRSNumber` - List all details of a charge revenue summary
* `getCRSByChargeID` - Retrieve a charge revenue summary by charge ID

### communicationProfiles

* `objectGETCommunicationProfile` - CRUD: Retrieve a communication profile

### connections

* `postConnections` - Establish a connection to Zuora REST API

### contacts

* `objectDELETEContact` - CRUD: Delete a contact
* `objectGETContact` - CRUD: Retrieve a contact
* `objectPOSTContact` - CRUD: Create a contact
* `objectPUTContact` - CRUD: Update a contact
* `putScrubContact` - Scrub a contact

### creditBalanceAdjustments

* `objectGETCreditBalanceAdjustment` - CRUD: Retrieve a credit balance adjustment
* `objectPOSTCreditBalanceAdjustment` - CRUD: Create a credit balance adjustment
* `objectPUTCreditBalanceAdjustment` - CRUD: Update a credit balance adjustment

### creditMemos

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
* `postCMTaxationItems` - Create taxation items for a credit memo
* `postCreditMemoFromPrpc` - Create a credit memo from a charge
* `postCreditMemoPDF` - Generate a credit memo PDF file
* `postEmailCreditMemo` - Email a credit memo
* `postRefundCreditMemo` - Refund a credit memo
* `postUploadFileForCreditMemo` - Upload a file for a credit memo
* `putApplyCreditMemo` - Apply a credit memo
* `putCancelCreditMemo` - Cancel a credit memo
* `putPostCreditMemo` - Post a credit memo
* `putUnapplyCreditMemo` - Unapply a credit memo
* `putUnpostCreditMemo` - Unpost a credit memo
* `putUpdateCreditMemo` - Update a credit memo

### customExchangeRates

* `getCustomExchangeRates` - List custom exchange rates by currency

### customObjectDefinitions

* `deleteCustomObjectDefinitionByType` - Delete a custom object definition
* `getAllCustomObjectDefinitionsInNamespace` - List custom object definitions
* `getCustomObjectDefinitionByType` - Retrieve a custom object definition
* `postCustomObjectDefinitions` - Create custom object definitions
* `postUpdateCustomObjectDefinition` - Update a custom object definition

### customObjectJobs

* `getAllCustomObjectBulkJobs` - List all custom object bulk jobs
* `getCustomObjectBulkJob` - Retrieve a custom object bulk job
* `getCustomObjectBulkJobErrors` - List all errors for a custom object bulk job
* `postCustomObjectBulkJob` - Submit a custom object bulk job
* `postUploadFileForCustomObjectBulkJob` - Upload a file for a custom object bulk job

### customObjectRecords

* `deleteCustomObjectRecordByID` - Delete a custom object record
* `getAllRecordsForCustomObjectType` - List records for a custom object
* `getCustomObjectRecordByID` - Retrieve a custom object record
* `postCustomObjectRecords` - Create custom object records
* `postCustomObjectRecordsBatchUpdateOrDelete` - Update or delete custom object records
* `putCustomObjectRecord` - Update a custom object record
* `patchPartialUpdateCustomObjectRecord` - Partially update a custom object record

### dataQueries

* `deleteDataQueryJob` - Cancel a data query job
* `getDataQueryJob` - Retrieve a data query job
* `getDataQueryJobs` - List data query jobs
* `postDataQueryJob` - Submit a data query

### debitMemos

* `deleteDebitMemo` - Delete a debit memo
* `getDebitMemo` - Retrieve a debit memo
* `getDebitMemoApplicationParts` - List all application parts of a debit memo
* `getDebitMemoItem` - Retrieve a debit memo item
* `getDebitMemoItems` - List debit memo items
* `getDebitMemos` - List debit memos
* `getTaxationItemsOfDebitMemoItem` - List all taxation items of a debit memo item
* `postDMTaxationItems` - Create taxation items for a debit memo
* `postDebitMemoCollect` - Collect a posted debit memo
* `postDebitMemoFromPrpc` - Create a debit memo from a charge
* `postDebitMemoPDF` - Generate a debit memo PDF file
* `postEmailDebitMemo` - Email a debit memo
* `postUploadFileForDebitMemo` - Upload a file for a debit memo
* `putBatchUpdateDebitMemos` - Update debit memos
* `putCancelDebitMemo` - Cancel a debit memo
* `putDebitMemo` - Update a debit memo
* `putPostDebitMemo` - Post a debit memo
* `putUnpostDebitMemo` - Unpost a debit memo

### describe

* `getDescribe` - Describe an object

### documentProperties

* `deleteDocumentProperties` - Delete document properties
* `getDocumentProperies` - List all properties of a billing document
* `postDocumentProperties` - Create document properties
* `putDocumentProperties` - Update document properties

### entities

* `deleteEntities` - Multi-entity: Delete an entity
* `getEntities` - Multi-entity: List entities
* `getEntityById` - Multi-entity: Retrieve an entity
* `postEntities` - Multi-entity: Create an entity
* `putEntities` - Multi-entity: Update an entity
* `putProvisionEntity` - Multi-entity: Provision an entity

### entityConnections

* `getEntityConnections` - Multi-entity: List connections
* `postEntityConnections` - Multi-entity: Initiate a connection request
* `putEntityConnectionsAccept` - Multi-entity: Accept a connection request
* `putEntityConnectionsDeny` - Multi-entity: Deny a connection request
* `putEntityConnectionsDisconnect` - Multi-entity: Disconnect a connection

### eventTriggers

* `deleteEventTrigger` - Delete an event trigger
* `getEventTrigger` - Retrieve an event trigger
* `getEventTriggers` - List event triggers
* `postEventTrigger` - Create an event trigger
* `putEventTrigger` - Update an event trigger

### exports

* `objectGETExport` - CRUD: Retrieve an export
* `objectPOSTExport` - CRUD: Create an export

### features

* `objectDELETEFeature` - CRUD: Delete a feature
* `objectGETFeature` - CRUD: Retrieve a feature
* `objectPOSTFeature` - CRUD: Create a feature
* `objectPUTFeature` - CRUD: Update a feature

### files

* `getFiles` - Retrieve a file

### hmacSignatures

* `postHMACSignatures` - Generate an HMAC signature

### hostedPages

* `getHostedPages` - List hosted pages

### imports

* `objectGETImport` - CRUD: Retrieve an import
* `objectPOSTImport` - CRUD: Create an import

### invoiceAdjustments

* `objectDELETEInvoiceAdjustment` - CRUD: Delete an invoice adjustment
* `objectGETInvoiceAdjustment` - CRUD: Retrieve an invoice adjustment
* `objectPOSTInvoiceAdjustment` - CRUD: Create an invoice adjustment
* `objectPUTInvoiceAdjustment` - CRUD: Update an invoice adjustment

### invoiceItemAdjustments

* `objectDELETEInvoiceItemAdjustment` - CRUD: Delete an invoice item adjustment
* `objectGETInvoiceItemAdjustment` - CRUD: Retrieve an invoice item adjustment

### invoiceItems

* `objectGETInvoiceItem` - CRUD: Retrieve an invoice item

### invoicePayments

* `objectGETInvoicePayment` - CRUD: Retrieve an invoice payment
* `objectPOSTInvoicePayment` - CRUD: Create an invoice payment
* `objectPUTInvoicePayment` - CRUD: Update an invoice payment

### invoiceSplitItems

* `objectGETInvoiceSplitItem` - CRUD: Retrieve an invoice split item

### invoiceSplits

* `objectGETInvoiceSplit` - CRUD: Retrieve an invoice split

### invoices

* `getInvoiceApplicationParts` - List all application parts of an invoice
* `getInvoiceFiles` - List all files of an invoice
* `getInvoiceItems` - List all items of an invoice
* `getTaxationItemsOfInvoiceItem` - List all taxation items of an invoice item
* `objectDELETEInvoice` - CRUD: Delete an invoice
* `objectGETInvoice` - CRUD: Retrieve an invoice
* `objectPUTInvoice` - CRUD: Update an invoice
* `postCreditMemoFromInvoice` - Create a credit memo from an invoice
* `postDebitMemoFromInvoice` - Create a debit memo from an invoice
* `postEmailInvoice` - Email an invoice
* `postStandaloneInvoice` - Create a standalone invoice
* `postUploadFileForInvoice` - Upload a file for an invoice
* `putBatchUpdateInvoices` - Update invoices
* `putReverseInvoice` - Reverse an invoice
* `putUpdateInvoice` - Update an invoice
* `putWriteOffInvoice` - Write off an invoice

### journalRuns

* `deleteJournalRun` - Delete a journal run
* `getJournalRun` - Retrieve a journal run
* `postJournalRun` - Create a journal run
* `putJournalRun` - Cancel a journal run

### massUpdater

* `getMassUpdater` - List all results of a mass action
* `postMassUpdater` - Perform a mass action
* `putMassUpdater` - Stop a mass action

### notifications

* `deleteDELETEEmailTemplate` - Delete an email template
* `deleteDELETENotificationDefinition` - Delete a notification definition
* `deleteDELETENotificationHistoryForAccount` - Delete notification histories for an account
* `getCalloutHistory` - List callout notification histories
* `getEmailHistory` - List email notification histories
* `getGETEmailTemplate` - Retrieve an email template
* `getGETNotificationDefinition` - Retrieve a notification definition
* `getGETNotificationHistoryDeletionTask` - Retrieve a notification history deletion task
* `getQueryEmailTemplates` - List email templates
* `getQueryNotificationDefinitions` - List notification definitions
* `postCreateEmailTemplate` - Create an email template
* `postCreateNotificationDefinition` - Create a notification definition
* `putUpdateEmailTemplate` - Update an email template
* `putUpdateNotificationDefinition` - Update a notification definition

### oAuth

* `createToken` - Create an OAuth token

### operations

* `postBillingPreview` - Generate a billing preview
* `postTransactionInvoicePayment` - Invoice and collect

### orderLineItems

* `getOrderLineItem` - Retrieve an order line item
* `putOrderLineItem` - Update an order line item
* `postOrderLineItems` - Update order line items

### orders

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

### paymentGatewayReconciliation

* `postReconcileRefund` - Reconcile a refund
* `postRejectPayment` - Reject a payment
* `postReversePayment` - Reverse a payment
* `postSettlePayment` - Settle a payment

### paymentGateways

* `getPaymentgateways` - List all payment gateways

### paymentMethodSnapshots

* `objectGETPaymentMethodSnapshot` - CRUD: Retrieve a payment method snapshot

### paymentMethodTransactionLogs

* `objectGETPaymentMethodTransactionLog` - CRUD: Retrieve a payment method transaction log

### paymentMethods

* `deletePaymentMethods` - Delete a payment method
* `getPaymentMethod` - Retrieve a payment method
* `getPaymentMethodsCreditCard` - List all credit card payment methods of an account
* `getStoredCredentialProfiles` - List stored credential profiles of a payment method
* `objectDELETEPaymentMethod` - CRUD: Delete a payment method
* `objectGETPaymentMethod` - CRUD: Retrieve a payment method
* `objectPOSTPaymentMethod` - CRUD: Create a payment method
* `objectPUTPaymentMethod` - CRUD: Update a payment method
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

### paymentRuns

* `deletePaymentRun` - Delete a payment run
* `getPaymentRun` - Retrieve a payment run
* `getPaymentRunData` - Retrieve payment run data
* `getPaymentRunSummary` - Retrieve a payment run summary
* `getPaymentRuns` - List payment runs
* `postPaymentRun` - Create a payment run
* `putPaymentRun` - Update a payment run

### paymentTransactionLogs

* `objectGETPaymentTransactionLog` - CRUD: Retrieve a payment transaction log

### payments

* `deletePayment` - Delete a payment
* `getPayment` - Retrieve a payment
* `getPaymentItemPart` - Retrieve a payment part item
* `getPaymentItemParts` - List all payment part items
* `getPaymentPart` - Retrieve a payment part
* `getPaymentParts` - List all parts of a payment
* `getRetrieveAllPayments` - List payments
* `objectDELETEPayment` - CRUD: Delete a payment
* `objectGETPayment` - CRUD: Retrieve a payment
* `objectPOSTPayment` - CRUD: Create a payment
* `objectPUTPayment` - CRUD: Update a payment
* `postCreatePayment` - Create a payment
* `postRefundPayment` - Refund a payment
* `putApplyPayment` - Apply a payment
* `putCancelPayment` - Cancel a payment
* `putTransferPayment` - Transfer a payment
* `putUnapplyPayment` - Unapply a payment
* `putUpdatePayment` - Update a payment

### productFeatures

* `objectDELETEProductFeature` - CRUD: Delete a product feature
* `objectGETProductFeature` - CRUD: Retrieve a product feature

### productRatePlanChargeTiers

* `objectGETProductRatePlanChargeTier` - CRUD: Retrieve a product rate plan charge tier
* `objectPUTProductRatePlanChargeTier` - CRUD: Update a product rate plan charge tier

### productRatePlanCharges

* `objectDELETEProductRatePlanCharge` - CRUD: Delete a product rate plan charge
* `objectGETProductRatePlanCharge` - CRUD: Retrieve a product rate plan charge
* `objectPOSTProductRatePlanCharge` - CRUD: Create a product rate plan charge
* `objectPUTProductRatePlanCharge` - CRUD: Update a product rate plan charge

### productRatePlans

* `getProductRatePlans` - List all product rate plans of a product
* `objectDELETEProductRatePlan` - CRUD: Delete a product rate plan
* `objectGETProductRatePlan` - CRUD: Retrieve a product rate plan
* `objectPOSTProductRatePlan` - CRUD: Create a product rate plan
* `objectPUTProductRatePlan` - CRUD: Update a product rate plan

### products

* `objectDELETEProduct` - CRUD: Delete a product
* `objectGETProduct` - CRUD: Retrieve a product
* `objectPOSTProduct` - CRUD: Create a product
* `objectPUTProduct` - CRUD: Update a product

### quotesDocument

* `postQuotesDocument` - Generate a quote document

### rsaSignatures

* `postDecryptRSASignatures` - Decrypt an RSA signature
* `postRSASignatures` - Generate an RSA signature

### ramps

* `getRampByRampNumber` - Retrieve a ramp
* `getRampMetricsByOrderNumber` - List ramp metrics by order number
* `getRampMetricsByRampNumber` - List all ramp metrics of a ramp
* `getRampMetricsBySubscriptionKey` - List ramp metrics by subscription key
* `getRampsBySubscriptionKey` - Retrieve a ramp by subscription key

### ratePlanChargeTiers

* `objectGETRatePlanChargeTier` - CRUD: Retrieve a rate plan charge tier

### ratePlanCharges

* `objectGETRatePlanCharge` - CRUD: Retrieve a rate plan charge
* `objectPUTRatePlanCharge` - CRUD: Update a rate plan charge

### ratePlans

* `objectGETRatePlan` - CRUD: Retrieve a rate plan

### refundInvoicePayments

* `objectGETRefundInvoicePayment` - CRUD: Retrieve a refund invoice payment

### refundTransactionLogs

* `objectGETRefundTransactionLog` - CRUD: Retrieve a refund transaction log

### refunds

* `deleteRefund` - Delete a refund
* `getRefund` - Retrieve a refund
* `getRefundItemPart` - Retrieve a refund part item
* `getRefundItemParts` - List all refund part items
* `getRefundPart` - Retrieve a refund part
* `getRefundParts` - List all parts of a refund
* `getRefunds` - List refunds
* `objectDELETERefund` - CRUD: Delete a refund
* `objectGETRefund` - CRUD: Retrieve a refund
* `objectPOSTRefund` - CRUD: Create a refund
* `objectPUTRefund` - CRUD: Update a refund
* `putCancelRefund` - Cancel a refund
* `putUpdateRefund` - Update a refund

### revenueEvents

* `getRevenueEventDetails` - Retrieve a revenue event
* `getRevenueEventForRevenueSchedule` - List all revenue events of a revenue schedule

### revenueItems

* `getRevenueItemsByChargeRevenueEventNumber` - List revenue items by revenue event number
* `getRevenueItemsByChargeRevenueSummaryNumber` - List revenue items by charge revenue summary number
* `getRevenueItemsByRevenueSchedule` - List all revenue items of a revenue schedule
* `putCustomFieldsonRevenueItemsByRevenueEvent` - Update custom fields on revenue items by revenue event number
* `putCustomFieldsonRevenueItemsByRevenueSchedule` - Update custom fields on revenue items by revenue schedule number

### revenueRules

* `getRevenueAutomationStartDate` - Retrieve a revenue automation start date
* `getRevenueRecRulebyProductRatePlanCharge` - Retrieve a revenue recognition rule by product rate plan charge ID
* `getRevenueRecRules` - Retrieve a revenue recognition rule by subscription charge ID

### revenueSchedules

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
* `putRSBasicInfo` - Update a revenue schedule
* `putRevenueAcrossAP` - Distribute revenue across accounting periods
* `putRevenueByRecognitionStartandEndDates` - Distribute revenue in a recognition period
* `putRevenueSpecificDate` - Distribute revenue on a specific date

### sequenceSets

* `deleteSequenceSet` - Delete a sequence set
* `getSequenceSet` - Retrieve a sequence set
* `getSequenceSets` - List sequence sets
* `postSequenceSets` - Create sequence sets
* `putSequenceSet` - Update a sequence set

### settings

* `getListAllSettings` - List all settings
* `postProcessSettingsBatchRequest` - Submit settings requests

### subscriptionProductFeatures

* `objectGETSubscriptionProductFeature` - CRUD: Retrieve a subscription product feature

### subscriptions

* `getSubscriptionsByAccount` - List subscriptions by account key
* `getSubscriptionsByKey` - Retrieve a subscription by key
* `getSubscriptionsByKeyAndVersion` - Retrieve a subscription by key and version
* `objectDELETESubscription` - CRUD: Delete a subscription
* `objectGETSubscription` - CRUD: Retrieve a subscription
* `objectPUTSubscription` - CRUD: Update a subscription
* `postPreviewSubscription` - Preview a subscription
* `postSubscription` - Create a subscription
* `putCancelSubscription` - Cancel a subscription
* `putRenewSubscription` - Renew a subscription
* `putResumeSubscription` - Resume a subscription
* `putSubscription` - Update a subscription
* `putSuspendSubscription` - Suspend a subscription
* `putUpdateSubscriptionCustomFieldsOfASpecifiedVersion` - Update subscription custom fields of a subscription version

### summaryJournalEntries

* `deleteSummaryJournalEntry` - Delete a summary journal entry
* `getAllSummaryJournalEntries` - List all summary journal entries in a journal run
* `getSummaryJournalEntry` - Retrieve a summary journal entry
* `postSummaryJournalEntry` - Create a summary journal entry
* `putBasicSummaryJournalEntry` - Update a summary journal entry
* `putSummaryJournalEntry` - Cancel a summary journal entry

### taxationItems

* `deleteTaxationItem` - Delete a taxation item
* `getTaxationItem` - Retrieve a taxation item

* `objectDELETETaxationItem` - CRUD: Delete a taxation item
* `objectGETTaxationItem` - CRUD: Retrieve a taxation item
* `objectPOSTTaxationItem` - CRUD: Create a taxation item
* `objectPUTTaxationItem` - CRUD: Update a taxation item
* `putTaxationItem` - Update a taxation item

### transactions

* `getTransactionInvoice` - List all invoices for an account
* `getTransactionPayment` - List all payments for an account

### unitOfMeasure

* `objectDELETEUnitOfMeasure` - CRUD: Delete a unit of measure
* `objectGETUnitOfMeasure` - CRUD: Retrieve a unit of measure
* `objectPOSTUnitOfMeasure` - CRUD: Create a unit of measure
* `objectPUTUnitOfMeasure` - CRUD: Update a unit of measure

### usage

* `getUsage` - Retrieve a usage record
* `objectDELETEUsage` - CRUD: Delete a usage record
* `objectGETUsage` - CRUD: Retrieve a usage record
* `objectPOSTUsage` - CRUD: Create a usage record
* `objectPUTUsage` - CRUD: Update a usage record
* `postUsage` - Upload a usage file

### users

* `getEntitiesUserAccessible` - Multi-entity: List all entities that a user can access
* `putAcceptUserAccess` - Multi-entity: Accept user access
* `putDenyUserAccess` - Multi-entity: Deny user access
* `putSendUserAccessRequests` - Multi-entity: Send user access requests

### workflows

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

### zuoraRevenueIntegration

* `putRevProAccountingCodes` - Update a Zuora Revenue accounting code
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

