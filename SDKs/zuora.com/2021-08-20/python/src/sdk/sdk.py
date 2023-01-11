

import requests

from . import utils

from .accounting_codes import AccountingCodes
from .accounting_periods import AccountingPeriods
from .accounts import Accounts
from .actions import Actions
from .amendments import Amendments
from .attachments import Attachments
from .bill_run import BillRun
from .billing_documents import BillingDocuments
from .billing_preview_run import BillingPreviewRun
from .catalog import Catalog
from .charge_metrics import ChargeMetrics
from .charge_revenue_summaries import ChargeRevenueSummaries
from .communication_profiles import CommunicationProfiles
from .connections import Connections
from .contacts import Contacts
from .credit_balance_adjustments import CreditBalanceAdjustments
from .credit_memos import CreditMemos
from .custom_exchange_rates import CustomExchangeRates
from .custom_object_definitions import CustomObjectDefinitions
from .custom_object_jobs import CustomObjectJobs
from .custom_object_records import CustomObjectRecords
from .data_queries import DataQueries
from .debit_memos import DebitMemos
from .describe import Describe
from .document_properties import DocumentProperties
from .entities import Entities
from .entity_connections import EntityConnections
from .event_triggers import EventTriggers
from .exports import Exports
from .features import Features
from .files import Files
from .hmac_signatures import HmacSignatures
from .hosted_pages import HostedPages
from .imports import Imports
from .invoice_adjustments import InvoiceAdjustments
from .invoice_item_adjustments import InvoiceItemAdjustments
from .invoice_items import InvoiceItems
from .invoice_payments import InvoicePayments
from .invoice_split_items import InvoiceSplitItems
from .invoice_splits import InvoiceSplits
from .invoices import Invoices
from .journal_runs import JournalRuns
from .mass_updater import MassUpdater
from .notifications import Notifications
from .oauth import OAuth
from .operations import Operations
from .order_line_items import OrderLineItems
from .orders import Orders
from .payment_gateway_reconciliation import PaymentGatewayReconciliation
from .payment_gateways import PaymentGateways
from .payment_method_snapshots import PaymentMethodSnapshots
from .payment_method_transaction_logs import PaymentMethodTransactionLogs
from .payment_methods import PaymentMethods
from .payment_runs import PaymentRuns
from .payment_transaction_logs import PaymentTransactionLogs
from .payments import Payments
from .product_features import ProductFeatures
from .product_rate_plan_charge_tiers import ProductRatePlanChargeTiers
from .product_rate_plan_charges import ProductRatePlanCharges
from .product_rate_plans import ProductRatePlans
from .products import Products
from .quotes_document import QuotesDocument
from .rsa_signatures import RsaSignatures
from .ramps import Ramps
from .rate_plan_charge_tiers import RatePlanChargeTiers
from .rate_plan_charges import RatePlanCharges
from .rate_plans import RatePlans
from .refund_invoice_payments import RefundInvoicePayments
from .refund_transaction_logs import RefundTransactionLogs
from .refunds import Refunds
from .revenue_events import RevenueEvents
from .revenue_items import RevenueItems
from .revenue_rules import RevenueRules
from .revenue_schedules import RevenueSchedules
from .sequence_sets import SequenceSets
from .settings import Settings
from .subscription_product_features import SubscriptionProductFeatures
from .subscriptions import Subscriptions
from .summary_journal_entries import SummaryJournalEntries
from .taxation_items import TaxationItems
from .transactions import Transactions
from .unit_of_measure import UnitOfMeasure
from .usage import Usage
from .users import Users
from .workflows import Workflows
from .zuora_revenue_integration import ZuoraRevenueIntegration


SERVERS = [
	"https://rest.zuora.com",
]


class SDK:
    
    accounting_codes: AccountingCodes
    accounting_periods: AccountingPeriods
    accounts: Accounts
    actions: Actions
    amendments: Amendments
    attachments: Attachments
    bill_run: BillRun
    billing_documents: BillingDocuments
    billing_preview_run: BillingPreviewRun
    catalog: Catalog
    charge_metrics: ChargeMetrics
    charge_revenue_summaries: ChargeRevenueSummaries
    communication_profiles: CommunicationProfiles
    connections: Connections
    contacts: Contacts
    credit_balance_adjustments: CreditBalanceAdjustments
    credit_memos: CreditMemos
    custom_exchange_rates: CustomExchangeRates
    custom_object_definitions: CustomObjectDefinitions
    custom_object_jobs: CustomObjectJobs
    custom_object_records: CustomObjectRecords
    data_queries: DataQueries
    debit_memos: DebitMemos
    describe: Describe
    document_properties: DocumentProperties
    entities: Entities
    entity_connections: EntityConnections
    event_triggers: EventTriggers
    exports: Exports
    features: Features
    files: Files
    hmac_signatures: HmacSignatures
    hosted_pages: HostedPages
    imports: Imports
    invoice_adjustments: InvoiceAdjustments
    invoice_item_adjustments: InvoiceItemAdjustments
    invoice_items: InvoiceItems
    invoice_payments: InvoicePayments
    invoice_split_items: InvoiceSplitItems
    invoice_splits: InvoiceSplits
    invoices: Invoices
    journal_runs: JournalRuns
    mass_updater: MassUpdater
    notifications: Notifications
    o_auth: OAuth
    operations: Operations
    order_line_items: OrderLineItems
    orders: Orders
    payment_gateway_reconciliation: PaymentGatewayReconciliation
    payment_gateways: PaymentGateways
    payment_method_snapshots: PaymentMethodSnapshots
    payment_method_transaction_logs: PaymentMethodTransactionLogs
    payment_methods: PaymentMethods
    payment_runs: PaymentRuns
    payment_transaction_logs: PaymentTransactionLogs
    payments: Payments
    product_features: ProductFeatures
    product_rate_plan_charge_tiers: ProductRatePlanChargeTiers
    product_rate_plan_charges: ProductRatePlanCharges
    product_rate_plans: ProductRatePlans
    products: Products
    quotes_document: QuotesDocument
    rsa_signatures: RsaSignatures
    ramps: Ramps
    rate_plan_charge_tiers: RatePlanChargeTiers
    rate_plan_charges: RatePlanCharges
    rate_plans: RatePlans
    refund_invoice_payments: RefundInvoicePayments
    refund_transaction_logs: RefundTransactionLogs
    refunds: Refunds
    revenue_events: RevenueEvents
    revenue_items: RevenueItems
    revenue_rules: RevenueRules
    revenue_schedules: RevenueSchedules
    sequence_sets: SequenceSets
    settings: Settings
    subscription_product_features: SubscriptionProductFeatures
    subscriptions: Subscriptions
    summary_journal_entries: SummaryJournalEntries
    taxation_items: TaxationItems
    transactions: Transactions
    unit_of_measure: UnitOfMeasure
    usage: Usage
    users: Users
    workflows: Workflows
    zuora_revenue_integration: ZuoraRevenueIntegration

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        self._init_sdks()


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        self._init_sdks()
    

    def config_client(self, client: requests.Session):
        self._client = client
        self._init_sdks()
    
    
    def _init_sdks(self):
        
        self.accounting_codes = AccountingCodes(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.accounting_periods = AccountingPeriods(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.accounts = Accounts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.actions = Actions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.amendments = Amendments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.attachments = Attachments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.bill_run = BillRun(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_documents = BillingDocuments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.billing_preview_run = BillingPreviewRun(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.catalog = Catalog(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.charge_metrics = ChargeMetrics(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.charge_revenue_summaries = ChargeRevenueSummaries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.communication_profiles = CommunicationProfiles(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.connections = Connections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.contacts = Contacts(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.credit_balance_adjustments = CreditBalanceAdjustments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.credit_memos = CreditMemos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_exchange_rates = CustomExchangeRates(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_object_definitions = CustomObjectDefinitions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_object_jobs = CustomObjectJobs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.custom_object_records = CustomObjectRecords(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.data_queries = DataQueries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.debit_memos = DebitMemos(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.describe = Describe(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.document_properties = DocumentProperties(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.entities = Entities(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.entity_connections = EntityConnections(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.event_triggers = EventTriggers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.exports = Exports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.features = Features(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.files = Files(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.hmac_signatures = HmacSignatures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.hosted_pages = HostedPages(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.imports = Imports(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_adjustments = InvoiceAdjustments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_item_adjustments = InvoiceItemAdjustments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_items = InvoiceItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_payments = InvoicePayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_split_items = InvoiceSplitItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoice_splits = InvoiceSplits(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.invoices = Invoices(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.journal_runs = JournalRuns(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.mass_updater = MassUpdater(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.notifications = Notifications(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.o_auth = OAuth(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.operations = Operations(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.order_line_items = OrderLineItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.orders = Orders(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_gateway_reconciliation = PaymentGatewayReconciliation(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_gateways = PaymentGateways(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_method_snapshots = PaymentMethodSnapshots(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_method_transaction_logs = PaymentMethodTransactionLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_methods = PaymentMethods(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_runs = PaymentRuns(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payment_transaction_logs = PaymentTransactionLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.payments = Payments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.product_features = ProductFeatures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.product_rate_plan_charge_tiers = ProductRatePlanChargeTiers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.product_rate_plan_charges = ProductRatePlanCharges(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.product_rate_plans = ProductRatePlans(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.products = Products(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.quotes_document = QuotesDocument(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rsa_signatures = RsaSignatures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.ramps = Ramps(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rate_plan_charge_tiers = RatePlanChargeTiers(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rate_plan_charges = RatePlanCharges(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.rate_plans = RatePlans(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.refund_invoice_payments = RefundInvoicePayments(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.refund_transaction_logs = RefundTransactionLogs(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.refunds = Refunds(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.revenue_events = RevenueEvents(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.revenue_items = RevenueItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.revenue_rules = RevenueRules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.revenue_schedules = RevenueSchedules(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.sequence_sets = SequenceSets(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.settings = Settings(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subscription_product_features = SubscriptionProductFeatures(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.subscriptions = Subscriptions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.summary_journal_entries = SummaryJournalEntries(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.taxation_items = TaxationItems(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.transactions = Transactions(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.unit_of_measure = UnitOfMeasure(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.usage = Usage(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.users = Users(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.workflows = Workflows(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
        
        self.zuora_revenue_integration = ZuoraRevenueIntegration(
            self._client,
            self._security_client,
            self._server_url,
            self._language,
            self._sdk_version,
            self._gen_version
        )
    
    