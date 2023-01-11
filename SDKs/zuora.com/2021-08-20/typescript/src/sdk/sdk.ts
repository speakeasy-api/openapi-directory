import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AccountingCodes } from "./accountingcodes";
import { AccountingPeriods } from "./accountingperiods";
import { Accounts } from "./accounts";
import { Actions } from "./actions";
import { Amendments } from "./amendments";
import { Attachments } from "./attachments";
import { BillRun } from "./billrun";
import { BillingDocuments } from "./billingdocuments";
import { BillingPreviewRun } from "./billingpreviewrun";
import { Catalog } from "./catalog";
import { ChargeMetrics } from "./chargemetrics";
import { ChargeRevenueSummaries } from "./chargerevenuesummaries";
import { CommunicationProfiles } from "./communicationprofiles";
import { Connections } from "./connections";
import { Contacts } from "./contacts";
import { CreditBalanceAdjustments } from "./creditbalanceadjustments";
import { CreditMemos } from "./creditmemos";
import { CustomExchangeRates } from "./customexchangerates";
import { CustomObjectDefinitions } from "./customobjectdefinitions";
import { CustomObjectJobs } from "./customobjectjobs";
import { CustomObjectRecords } from "./customobjectrecords";
import { DataQueries } from "./dataqueries";
import { DebitMemos } from "./debitmemos";
import { Describe } from "./describe";
import { DocumentProperties } from "./documentproperties";
import { Entities } from "./entities";
import { EntityConnections } from "./entityconnections";
import { EventTriggers } from "./eventtriggers";
import { Exports } from "./exports";
import { Features } from "./features";
import { Files } from "./files";
import { HmacSignatures } from "./hmacsignatures";
import { HostedPages } from "./hostedpages";
import { Imports } from "./imports";
import { InvoiceAdjustments } from "./invoiceadjustments";
import { InvoiceItemAdjustments } from "./invoiceitemadjustments";
import { InvoiceItems } from "./invoiceitems";
import { InvoicePayments } from "./invoicepayments";
import { InvoiceSplitItems } from "./invoicesplititems";
import { InvoiceSplits } from "./invoicesplits";
import { Invoices } from "./invoices";
import { JournalRuns } from "./journalruns";
import { MassUpdater } from "./massupdater";
import { Notifications } from "./notifications";
import { OAuth } from "./oauth";
import { Operations } from "./operations";
import { OrderLineItems } from "./orderlineitems";
import { Orders } from "./orders";
import { PaymentGatewayReconciliation } from "./paymentgatewayreconciliation";
import { PaymentGateways } from "./paymentgateways";
import { PaymentMethodSnapshots } from "./paymentmethodsnapshots";
import { PaymentMethodTransactionLogs } from "./paymentmethodtransactionlogs";
import { PaymentMethods } from "./paymentmethods";
import { PaymentRuns } from "./paymentruns";
import { PaymentTransactionLogs } from "./paymenttransactionlogs";
import { Payments } from "./payments";
import { ProductFeatures } from "./productfeatures";
import { ProductRatePlanChargeTiers } from "./productrateplanchargetiers";
import { ProductRatePlanCharges } from "./productrateplancharges";
import { ProductRatePlans } from "./productrateplans";
import { Products } from "./products";
import { QuotesDocument } from "./quotesdocument";
import { RsaSignatures } from "./rsasignatures";
import { Ramps } from "./ramps";
import { RatePlanChargeTiers } from "./rateplanchargetiers";
import { RatePlanCharges } from "./rateplancharges";
import { RatePlans } from "./rateplans";
import { RefundInvoicePayments } from "./refundinvoicepayments";
import { RefundTransactionLogs } from "./refundtransactionlogs";
import { Refunds } from "./refunds";
import { RevenueEvents } from "./revenueevents";
import { RevenueItems } from "./revenueitems";
import { RevenueRules } from "./revenuerules";
import { RevenueSchedules } from "./revenueschedules";
import { SequenceSets } from "./sequencesets";
import { Settings } from "./settings";
import { SubscriptionProductFeatures } from "./subscriptionproductfeatures";
import { Subscriptions } from "./subscriptions";
import { SummaryJournalEntries } from "./summaryjournalentries";
import { TaxationItems } from "./taxationitems";
import { Transactions } from "./transactions";
import { UnitOfMeasure } from "./unitofmeasure";
import { Usage } from "./usage";
import { Users } from "./users";
import { Workflows } from "./workflows";
import { ZuoraRevenueIntegration } from "./zuorarevenueintegration";


export const ServerList = [
	"https://rest.zuora.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public accountingCodes: AccountingCodes;
  public accountingPeriods: AccountingPeriods;
  public accounts: Accounts;
  public actions: Actions;
  public amendments: Amendments;
  public attachments: Attachments;
  public billRun: BillRun;
  public billingDocuments: BillingDocuments;
  public billingPreviewRun: BillingPreviewRun;
  public catalog: Catalog;
  public chargeMetrics: ChargeMetrics;
  public chargeRevenueSummaries: ChargeRevenueSummaries;
  public communicationProfiles: CommunicationProfiles;
  public connections: Connections;
  public contacts: Contacts;
  public creditBalanceAdjustments: CreditBalanceAdjustments;
  public creditMemos: CreditMemos;
  public customExchangeRates: CustomExchangeRates;
  public customObjectDefinitions: CustomObjectDefinitions;
  public customObjectJobs: CustomObjectJobs;
  public customObjectRecords: CustomObjectRecords;
  public dataQueries: DataQueries;
  public debitMemos: DebitMemos;
  public describe: Describe;
  public documentProperties: DocumentProperties;
  public entities: Entities;
  public entityConnections: EntityConnections;
  public eventTriggers: EventTriggers;
  public exports: Exports;
  public features: Features;
  public files: Files;
  public hmacSignatures: HmacSignatures;
  public hostedPages: HostedPages;
  public imports: Imports;
  public invoiceAdjustments: InvoiceAdjustments;
  public invoiceItemAdjustments: InvoiceItemAdjustments;
  public invoiceItems: InvoiceItems;
  public invoicePayments: InvoicePayments;
  public invoiceSplitItems: InvoiceSplitItems;
  public invoiceSplits: InvoiceSplits;
  public invoices: Invoices;
  public journalRuns: JournalRuns;
  public massUpdater: MassUpdater;
  public notifications: Notifications;
  public oAuth: OAuth;
  public operations: Operations;
  public orderLineItems: OrderLineItems;
  public orders: Orders;
  public paymentGatewayReconciliation: PaymentGatewayReconciliation;
  public paymentGateways: PaymentGateways;
  public paymentMethodSnapshots: PaymentMethodSnapshots;
  public paymentMethodTransactionLogs: PaymentMethodTransactionLogs;
  public paymentMethods: PaymentMethods;
  public paymentRuns: PaymentRuns;
  public paymentTransactionLogs: PaymentTransactionLogs;
  public payments: Payments;
  public productFeatures: ProductFeatures;
  public productRatePlanChargeTiers: ProductRatePlanChargeTiers;
  public productRatePlanCharges: ProductRatePlanCharges;
  public productRatePlans: ProductRatePlans;
  public products: Products;
  public quotesDocument: QuotesDocument;
  public rsaSignatures: RsaSignatures;
  public ramps: Ramps;
  public ratePlanChargeTiers: RatePlanChargeTiers;
  public ratePlanCharges: RatePlanCharges;
  public ratePlans: RatePlans;
  public refundInvoicePayments: RefundInvoicePayments;
  public refundTransactionLogs: RefundTransactionLogs;
  public refunds: Refunds;
  public revenueEvents: RevenueEvents;
  public revenueItems: RevenueItems;
  public revenueRules: RevenueRules;
  public revenueSchedules: RevenueSchedules;
  public sequenceSets: SequenceSets;
  public settings: Settings;
  public subscriptionProductFeatures: SubscriptionProductFeatures;
  public subscriptions: Subscriptions;
  public summaryJournalEntries: SummaryJournalEntries;
  public taxationItems: TaxationItems;
  public transactions: Transactions;
  public unitOfMeasure: UnitOfMeasure;
  public usage: Usage;
  public users: Users;
  public workflows: Workflows;
  public zuoraRevenueIntegration: ZuoraRevenueIntegration;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.accountingCodes = new AccountingCodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accountingPeriods = new AccountingPeriods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.actions = new Actions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.amendments = new Amendments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.attachments = new Attachments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billRun = new BillRun(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billingDocuments = new BillingDocuments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.billingPreviewRun = new BillingPreviewRun(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.catalog = new Catalog(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chargeMetrics = new ChargeMetrics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chargeRevenueSummaries = new ChargeRevenueSummaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.communicationProfiles = new CommunicationProfiles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.connections = new Connections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.contacts = new Contacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.creditBalanceAdjustments = new CreditBalanceAdjustments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.creditMemos = new CreditMemos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customExchangeRates = new CustomExchangeRates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customObjectDefinitions = new CustomObjectDefinitions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customObjectJobs = new CustomObjectJobs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.customObjectRecords = new CustomObjectRecords(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataQueries = new DataQueries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.debitMemos = new DebitMemos(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.describe = new Describe(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.documentProperties = new DocumentProperties(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entities = new Entities(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.entityConnections = new EntityConnections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.eventTriggers = new EventTriggers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.exports = new Exports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.features = new Features(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.files = new Files(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.hmacSignatures = new HmacSignatures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.hostedPages = new HostedPages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.imports = new Imports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceAdjustments = new InvoiceAdjustments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceItemAdjustments = new InvoiceItemAdjustments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceItems = new InvoiceItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoicePayments = new InvoicePayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceSplitItems = new InvoiceSplitItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoiceSplits = new InvoiceSplits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.invoices = new Invoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.journalRuns = new JournalRuns(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.massUpdater = new MassUpdater(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.notifications = new Notifications(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.oAuth = new OAuth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.operations = new Operations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orderLineItems = new OrderLineItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.orders = new Orders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentGatewayReconciliation = new PaymentGatewayReconciliation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentGateways = new PaymentGateways(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentMethodSnapshots = new PaymentMethodSnapshots(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentMethodTransactionLogs = new PaymentMethodTransactionLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentMethods = new PaymentMethods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentRuns = new PaymentRuns(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.paymentTransactionLogs = new PaymentTransactionLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productFeatures = new ProductFeatures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productRatePlanChargeTiers = new ProductRatePlanChargeTiers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productRatePlanCharges = new ProductRatePlanCharges(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.productRatePlans = new ProductRatePlans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.products = new Products(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quotesDocument = new QuotesDocument(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.rsaSignatures = new RsaSignatures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ramps = new Ramps(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ratePlanChargeTiers = new RatePlanChargeTiers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ratePlanCharges = new RatePlanCharges(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ratePlans = new RatePlans(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.refundInvoicePayments = new RefundInvoicePayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.refundTransactionLogs = new RefundTransactionLogs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.refunds = new Refunds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.revenueEvents = new RevenueEvents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.revenueItems = new RevenueItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.revenueRules = new RevenueRules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.revenueSchedules = new RevenueSchedules(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sequenceSets = new SequenceSets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptionProductFeatures = new SubscriptionProductFeatures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.subscriptions = new Subscriptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.summaryJournalEntries = new SummaryJournalEntries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.taxationItems = new TaxationItems(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.unitOfMeasure = new UnitOfMeasure(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.usage = new Usage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.users = new Users(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.workflows = new Workflows(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.zuoraRevenueIntegration = new ZuoraRevenueIntegration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}